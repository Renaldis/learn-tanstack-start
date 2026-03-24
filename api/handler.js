import { default as handler } from '../dist/server/server.js'

export default async function (req, res) {
  // TanStack Start server menggunakan standar Web Fetch API
  // mengonversi request Vercel ke Fetch Request
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const host = req.headers.host
  const url = new URL(req.url, `${protocol}://${host}`)

  const response = await handler.fetch(
    new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    }),
  )

  // Kirim balik response ke Vercel
  res.status(response.status)
  response.headers.forEach((value, key) => {
    res.setHeader(key, value)
  })

  const body = await response.text()
  res.send(body)
}

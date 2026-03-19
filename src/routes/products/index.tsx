import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/products/"!
      <Button>Tekan Ini</Button>
    </div>
  )
}

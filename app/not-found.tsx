import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-xl mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/" passHref>
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  )
}

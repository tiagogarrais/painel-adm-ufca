import { useSession } from 'next-auth/react'
import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
import { Footer } from '../../components/footer/Footer'
import { NaoLogado } from '../../components/nao-logado/NaoLogado'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <MenuSuperior />

        <div id="botoes">
          <Link href="/transportes/solicita">
            <button>Solicitar Transporte</button>
          </Link>
        </div>

        <Footer />
      </>
    )
  }

  return <NaoLogado />
}

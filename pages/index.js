import { useSession } from 'next-auth/react'
import { MenuSuperior } from '../components/menu-superior/MenuSuperior'
import { Footer } from '../components/footer/Footer'
import { NaoLogado } from '../components/nao-logado/NaoLogado'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <MenuSuperior />
        <h2>Universidade Federal do Cariri - UFCA</h2>
        <h2>Instituto de Formação de Educadores - IFE</h2>
        <h1>
          Serviços digitais da Administração
          <br />
          Campus Brejo Santo
        </h1>

        <div id="botoes">
          <Link href="/ambientes/0">
            <button>Ambientes - Campus Brejo Santo</button>
          </Link>

          <Link href="/transportes">
            <button>Transportes IFE</button>
          </Link>
        </div>

        <Footer />
      </>
    )
  }

  return <NaoLogado />
}

import { useSession } from 'next-auth/react'
import { MenuSuperior } from '../components/menu-superior/MenuSuperior'
import { Footer } from '../components/footer/Footer'
import { NaoLogado } from '../components/nao-logado/NaoLogado'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <MenuSuperior />
        <h1>
          Serviços digitais da Administração
          <br />
          Campus Brejo Santo
        </h1>
        <a href="/ambientes/0">
          <button>Ambientes - Campus Brejo Santo</button>
        </a>
        <Footer />
      </>
    )
  }

  return <NaoLogado />
}

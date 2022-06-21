import { useSession, signIn } from 'next-auth/react'
import { MenuSuperior } from '../components/menu-superior/MenuSuperior'
import { Footer } from '../components/footer/Footer'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <MenuSuperior />
        <main>
          <h1>
            Painel de serviços da Administração
            <br />
            <span>Campus Brejo Santo</span>
          </h1>
          <a href="/ambientes-acesso">
            <button>Acesso a ambientes</button>
          </a>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <div>
      <main>
        <p>
          {' '}
          Não logado <button onClick={() => signIn()}>Sign in</button>{' '}
        </p>
      </main>
    </div>
  )
}

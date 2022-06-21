import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
import { NaoLogado } from '../../components/nao-logado/NaoLogado'
import styles from './Ambientes-acesso.module.css'

export default function AmbientesAcesso() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <Head>
          <title>Ambientes e permissão de acesso</title>
          <meta name="description" content="Permissão de acesso a ambientes" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MenuSuperior />

        <main>
          <h1>Ambientes e permissão de acesso</h1>
          <input placeholder="Qual o número da chave?" />
          <button>Verificar</button>
        </main>
        <Footer />
      </div>
    )
  }

  return <NaoLogado />
}

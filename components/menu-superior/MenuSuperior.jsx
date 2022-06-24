import { useSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import styles from './MenuSuperior.module.css'

export function MenuSuperior() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Painel da Administração Campus Brejo Santo</title>
        <meta
          name="description"
          content="Painel da Administração Campus Brejo Santo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.menuSuperior}>
        <p>
          <a href="/">Página Inicial</a>
        </p>
        <p>
          Bem vindo(a) {session.user.email}
          <button style={{ marginLeft: '0.5rem' }} onClick={() => signOut()}>
            Sair
          </button>
        </p>
      </div>
    </>
  )
}

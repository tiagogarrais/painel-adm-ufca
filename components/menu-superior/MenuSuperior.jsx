import { useSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import styles from './MenuSuperior.module.css'

export function MenuSuperior() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Painel de serviços da Administração Campus Brejo Santo</title>
        <meta
          name="description"
          content="Painel de serviços da Administração Campus Brejo Santo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.menuSuperior}>
        Logado com o e-mail {session.user.email}
        <span>ﾠ</span>
        <button onClick={() => signOut()}>Sair</button>
      </p>
    </>
  )
}

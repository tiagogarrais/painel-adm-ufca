import { useSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import styles from './MenuSuperior.module.css'
import Link from 'next/link'

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
          <Link href="/">Página Inicial</Link>
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

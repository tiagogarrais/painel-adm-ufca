import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function AmbientesAcesso() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Permissão de acesso a ambientes</title>
          <meta name="description" content="Permissão de acesso a ambientes" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <p>
            <button onClick={() => signOut()}>Sair</button>
          </p>
        </header>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Permissão de acesso aos ambientes
          </h1>

          <a href="../"><button className={styles.title}>Página Inicial</button></a>

        </main>

        <footer className={styles.footer}>Powered by Adm. Tiago</footer>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>
          {" "}
          Não logado <button onClick={() => signIn()}>Sign in</button>{" "}
        </p>
      </main>
    </div>
  );
}

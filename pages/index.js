import { useSession, signIn } from "next-auth/react";
import styles from "../styles/Home.module.css";
import { MenuSuperior } from "../components/MenuSuperior";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <MenuSuperior/>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Painel de serviços da Administração<br/>
            <span>Campus Brejo Santo</span>
          </h1>
          <a href="/ambientes-acesso"><button className={styles.title}>Acesso a ambientes</button></a>
        </main>

        <footer className={styles.footer}>Powered by Adm. Tiago Arrais - CRA 11.660</footer>
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
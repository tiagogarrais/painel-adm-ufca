import { useSession, signIn } from 'next-auth/react'

export function NaoLogado() {
  const { data: session } = useSession()

  return (
    <div>
      <main>
        <p>
          {' '}
          Você precisa se registrar para acessar este sistema{' '}
          <button onClick={() => signIn()}>Entrar</button>{' '}
        </p>
        <p>
          Reunimos aqui alguns dos sistemas informatizados desenvolvidos pelo{' '}
          <a target="_blank" href="https://linktr.ee/tiagoarraisholanda">
            Adm. Tiago Arrais
          </a>{' '}
          para facilitar o trabalho na Universidade Federal do Cariri.
        </p>
      </main>
    </div>
  )
}

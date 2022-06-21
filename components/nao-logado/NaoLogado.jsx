import { useSession, signIn } from 'next-auth/react'


export function NaoLogado(){
  const { data: session } = useSession()

  return(
    <div>
    <main>
      <p>
        {' '}
        Você precisa se registrar para acessar este site <button onClick={() => signIn()}>Entrar</button>{' '}
      </p>
    </main>
  </div>
  )
}
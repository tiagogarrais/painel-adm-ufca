import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
import { NaoLogado } from '../../components/nao-logado/NaoLogado'

export default function AmbientesAcesso() {
  const { data: session } = useSession()
  const [sala, setSala] = useState('')

  function handleBuscarSala(event) {
    event.preventDefault()

    if (sala === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa informar o número da sala.'
      return
    }

    let regex = /ufca\.edu.br$/
    let testeEmailUfca = regex.test(session.user.email)
    if (testeEmailUfca === false) {
      document.getElementById('aviso').innerHTML =
        'Você precisa fazer login com um e-mail @ufca.edu.br para enviar dados.'
      return
    }

    document.getElementById('aviso').innerHTML =
      'Buscando as informações, aguarde...'

    buscarSala(sala)
  }

  async function buscarSala() {
    const response = await fetch('/api/ambientes/buscar')
    const salaRecebida = await response.json()
    console.log();
    document.getElementById('aviso').innerHTML = 
      salaRecebida['nomeAmbiente'] +' '+'->'+' ' + salaRecebida['servidorResponsavel']
    setSala('')
  }


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

          <form className="form" onSubmit={handleBuscarSala}>
            <input
              placeholder="Qual o número da sala?"
              onChange={event => setSala(event.target.value)}
              value={sala}
            />
            <button type="submit">Verificar</button>
            <p
              id="aviso"
              style={{ backgroundColor: 'yellow', color: 'black' }}
            ></p>
          </form>

        </main>
        <Footer />
      </div>
    )
  }
  return <NaoLogado />
}

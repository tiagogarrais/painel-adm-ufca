import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
import { NaoLogado } from '../../components/nao-logado/NaoLogado'

export default function AmbientesAcesso() {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const tituloPagina = 'Permissão de acesso a ambientes'
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

    document.getElementById('aviso').innerHTML = 'Buscando as informações, aguarde...'
    
    buscarSala(sala)
  }

  async function buscarSala(sala) {
    const res = await fetch('/api/ambientes/buscarSala')
    const salaRecebida = await res.json()
    document.getElementById('aviso').innerHTML = 
      salaRecebida['nomeAmbiente'] +' '+'->'+' ' + salaRecebida['servidorResponsavel']
    setSala('')
  }


  if (session) {
    return (
      <div>
        <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content={tituloPagina} />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <MenuSuperior />
        <main>
        <h1>{tituloPagina}</h1>

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
          <div>Ambiente: {ambiente}</div>


        </main>
        <Footer />
      </div>
    )
  }
  return <NaoLogado />
}

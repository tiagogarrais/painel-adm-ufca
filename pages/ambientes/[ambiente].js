import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
import { NaoLogado } from '../../components/nao-logado/NaoLogado'

export default function Ambientes(request, response) {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const tituloPagina = 'Ambientes IFE'
  const { data: session } = useSession()
  const [sala, setSala] = useState('')


  function handleBuscarSala(event) {
    event.preventDefault()

    if (sala === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa informar o número da sala.'
      return
    }

    if ((isNaN(sala)) === true){
      document.getElementById('aviso').innerHTML =
      'O valor que você informou não era um número.'
      return
    }

    let regex = /ufca\.edu.br$/
    let testeEmailUfca = regex.test(session.user.email)
    if (testeEmailUfca === false) {
      document.getElementById('aviso').innerHTML =
        'Você precisa fazer login com um e-mail @ufca.edu.br para acessar as informações.'
      return
    }

    document.getElementById('aviso').innerHTML = 'Buscando as informações, aguarde...'
    
    let linksala = "/ambientes/" + sala
    window.location.href = linksala


  }

  async function buscarSala() {
    const linksala2 = "/api/ambientes/buscarSala/"+sala
    const res = await fetch(linksala2)
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
          <div>Ambiente: {ambiente}</div>

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

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
  const linkApiSala = '../api/ambientes/' + ambiente
  const dadosAmbiente = fetch(linkApiSala)
    .then(function (dadosBrutos) {
      return dadosBrutos.json()
    })
    .then(function (dadosJson) {
      if (dadosJson.nomeAmbiente != null) {
        document.getElementById('nomeAmbiente').innerText =
          dadosJson.nomeAmbiente
      }
      if (dadosJson.servidorResponsavel != null) {
        document.getElementById('servidorResponsavel').innerText =
          dadosJson.servidorResponsavel
      }
      if (dadosJson.responsabilidadeLimpeza != null) {
        document.getElementById('responsabilidadeLimpeza').innerText =
          dadosJson.responsabilidadeLimpeza
      }
      if (dadosJson.LarguraLesteOeste != null) {
        document.getElementById('LarguraLesteOeste').innerText =
          dadosJson.LarguraLesteOeste
      }
      if (dadosJson.comprimento != null) {
        document.getElementById('comprimento').innerText = dadosJson.comprimento
      }
      if (dadosJson.altura != null) {
        document.getElementById('altura').innerText = dadosJson.altura
      }
    })
    .catch(function (e) {
      console.log('Erro capturado, consulte o código para mais informações')
    })

  function buscarSala(event) {
    event.preventDefault()

    if (sala === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa informar o número da sala.'
      return
    }

    if (isNaN(sala) === true) {
      document.getElementById('aviso').innerHTML =
        'O valor que você informou não é um número.'
      return
    }

    let regex = /ufca\.edu.br$/
    let testeEmailUfca = regex.test(session.user.email)
    if (testeEmailUfca === false) {
      document.getElementById('aviso').innerHTML =
        'Você precisa fazer login com um e-mail @ufca.edu.br para acessar as informações.'
      return
    }

    document.getElementById('aviso').innerHTML =
      'Buscando as informações, aguarde...'

    let linksala = '/ambientes/' + sala
    window.location.href = linksala
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
          <h2 id="nomeAmbiente"></h2>
          <div>Chave número: {ambiente}</div>

          <label>
            Servidor Responsavel: <span id="servidorResponsavel"></span>
          </label>
          <br />

          <label>
            Largura Leste-Oeste: <span id="LarguraLesteOeste"></span>
          </label>
          <br />

          <label>
            Cumprimento: <span id="comprimento"></span>
          </label>
          <br />

          <label>
            Servente de Limpeza: <span id="responsabilidadeLimpeza"></span>
          </label>
          <br />

          <form className="form" onSubmit={buscarSala}>
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

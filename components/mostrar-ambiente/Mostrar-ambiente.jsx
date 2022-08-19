import { useRouter } from 'next/router'

export function MostrarAmbiente() {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiSala = '../api/ambientes/' + ambiente

  fetch(linkApiSala)
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

  return (
    <>
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
    </>
  )
}

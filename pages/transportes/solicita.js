import { useSession } from 'next-auth/react'
import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
import { Footer } from '../../components/footer/Footer'
import { NaoLogado } from '../../components/nao-logado/NaoLogado'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <MenuSuperior />

        <form id="solicitacao">
          <h3>Dados do solicitante do veículo</h3>

          <label>
            <input
              placeholder="Nome completo do solicitante"
              type="textarea"
              id="solicitante"
              name="solicitante"
              autosave
            />
          </label>

          <label>
            <input
              placeholder="Matrícula ou documento de identificação"
              type="textarea"
              id="matriculaOuDocumento"
              name="matriculaOuDocumento"
              autosave
            />
          </label>

          <label>
            <input
              placeholder="Telefone para contato"
              type="tel"
              id="telefone"
              name="telefone"
              autosave
            />
          </label>

          <h3>Objetivo da viagem</h3>

          <label>
            <textarea
              placeholder="Informe o objetivo da viagem"
              name="objetivo"
              id="objetivo"
              spellcheck="true"
            ></textarea>
          </label>

          <h3>Qual o veículo que melhor atende sua demanda?</h3>

          <label for="minivan">
            <input
              type="radio"
              name="veiculo"
              id="minivan"
              value="Minivan"
              required
              checked
            />
            <img
              class="radio-option"
              src="/images/minivan-PME8004.jpg"
              alt="Minivan"
            />
            Minivan - 6 vagas + motorista
          </label>

          <label for="onibus">
            <input type="radio" name="veiculo" id="onibus" value="Ônibus" />
            <img
              class="radio-option"
              src="/images/onibus-PMU0683.jpg"
              alt="Ônibus"
            />
            Ônibus - 44 vagas + motorista
          </label>

          <h3>Destino da viagem</h3>
          <p>
            <a
              href="http://raiolaser.16mb.com/index.php/Uso_dos_ve%C3%ADculos_oficiais_da_UFCA_campus_Brejo_Santo#Atua.C3.A7.C3.A3o:_Raio_de_800_km_.C3.A0_partir_da_sede_-_Juazeiro_do_Norte.3B"
              target="_blank"
              rel="noreferrer"
            >
              Consultar raio de atuação do serviço de transportes do IFE ↗
            </a>
          </p>

          <label>
            UF destino
            <select id="estado" name="estado" required>
              <option value="AL">Alagoas</option>
              <option value="CE" selected>
                Ceará
              </option>
              <option value="BA">Bahia</option>
              <option value="MA">Maranhão</option>
              <option value="PB">Paraíba</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="SE">Sergipe</option>
            </select>
          </label>

          <label>
            Cidade destino
            <input type="text" autosave />
          </label>

          <label>
            Data da viagem - Ida
            <input type="datetime-local" name="ida" />
          </label>

          <label>
            Data da viagem - Volta
            <input type="datetime-local" name="retorno" />
          </label>

          <label>
            <h3>Local de saída</h3>
            <p>Se for necessário pode-se marcar mais de uma opção.</p>
          </label>

          <label for="local1">
            <input
              type="checkbox"
              name="localSaida"
              id="local1"
              value="Prédio Sede do IFE, Bairro Centro."
              checked
            />
            <span class="radio-option">
              {' '}
              Prédio Sede do IFE, Bairro Centro.{' '}
            </span>
          </label>

          <label for="local2">
            <input
              type="checkbox"
              name="localSaida"
              id="local2"
              value="Praça Dionísio Rocha de Lucena, Bairro Centro."
            />
            <span class="radio-option">
              Praça Dionísio Rocha de Lucena, Bairro Centro.
            </span>
          </label>

          <label for="local3">
            <input
              type="checkbox"
              name="localSaida"
              id="local3"
              value="Posto Abaiara (quando não houver desvio de trajeto)"
            />
            <span class="radio-option">
              Posto Abaiara (quando não houver desvio de trajeto)
            </span>
          </label>

          <label>
            <h3>
              A viagem atenderá algum dos objetivos prioritários abaixo
              relacionados?
            </h3>
            <p>
              O Conselho da Unidade Acadêmica decidiu que essas solicitações
              possuem fluxo de aprovação automática.
            </p>
          </label>

          <label for="objetivo1">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo1"
              value="Recebimento de avaliadores do MEC"
            />
            <span class="radio-option">Recebimento de avaliadores do MEC</span>
          </label>

          <label for="objetivo2">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo2"
              value="Reuniões agendadas pelo setor de transportes com os motoristas"
            />
            <span class="radio-option">
              Reuniões agendadas pelo setor de transportes com os motoristas
            </span>
          </label>

          <label for="objetivo3">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo3"
              value="Reunião com calendário definido previamente e que envolve representação do IFE"
            />
            <span class="radio-option">
              Reunião com calendário definido previamente e que envolve
              representação do IFE
            </span>
          </label>

          <label for="objetivo4">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo4"
              value="Mudança de prédio"
            />
            <span class="radio-option">Mudança de prédio</span>
          </label>

          <label for="objetivo5">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo5"
              value="Eventos de colação de grau"
            />
            <span class="radio-option">Eventos de colação de grau</span>
          </label>

          <label for="objetivo6">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo6"
              value="Montagem de estande na ExpoBrejo"
            />
            <span class="radio-option">Montagem de estande na ExpoBrejo</span>
          </label>

          <label for="objetivo7">
            <input
              type="checkbox"
              name="objetivoPrioritario"
              id="objetivo7"
              value="Revisões dos veículos, quando estas não puderem ser feitas em datas sem agendamentos"
            />
            <span class="radio-option">
              Revisões dos veículos, quando estas não puderem ser feitas em
              datas sem agendamentos
            </span>
          </label>

          <h3>Qual o tipo da solicitação?</h3>

          <label for="veiculoComMotorista">
            <input
              type="radio"
              name="tipo"
              id="veiculoComMotorista"
              value="Veículo com motorista"
            />
            <span class="radio-option"> Veículo com motorista </span>
          </label>

          <label for="veiculoSemMotorista">
            <input
              type="radio"
              name="tipo"
              id="veiculoSemMotorista"
              value="Veículo sem motorista"
            />

            <span class="radio-option">
              Veículo sem motorista (É necessário apresentar Portaria
              autorizando a condução para a retirada do veículo)
            </span>
          </label>
          <label>
            <input type="file" name="portaria" />
          </label>

          <h3>
            Esta solicitação vai atender a demanda de qual setor ou grupo?
          </h3>

          <label for="alunosIfe">
            <input
              type="radio"
              name="setor"
              id="alunosIfe"
              value="Alunos do IFE"
            />
            <span class="radio-option"> Alunos do IFE </span>
          </label>

          <label for="assistenciaEstudantilIfe">
            <input
              type="radio"
              name="setor"
              id="assistenciaEstudantilIfe"
              value="Assistência estudantil do IFE"
            />
            <span class="radio-option">Assistência estudantil do IFE</span>
          </label>

          <label for="direcaoIfe">
            <input
              type="radio"
              name="setor"
              id="direcaoIfe"
              value="Direção do IFE"
            />
            <span class="radio-option">Direção do IFE</span>
          </label>

          <label for="licenciaturaBiologia">
            <input
              type="radio"
              name="setor"
              id="licenciaturaBiologia"
              value="Licenciatura em Biologia"
            />
            <span class="radio-option">Licenciatura em Biologia</span>
          </label>

          <label for="licenciaturaFisica">
            <input
              type="radio"
              name="setor"
              id="licenciaturaFisica"
              value="Licenciatura em Física"
            />
            <span class="radio-option">Licenciatura em Física</span>
          </label>

          <label for="licenciaturaMatematica">
            <input
              type="radio"
              name="setor"
              id="licenciaturaMatematica"
              value="Licenciatura em Matemática"
            />
            <span class="radio-option">Licenciatura em Matemática</span>
          </label>

          <label for="licenciaturaPedagogia">
            <input
              type="radio"
              name="setor"
              id="licenciaturaPedagogia"
              value="Licenciatura em Pedagogia"
            />
            <span class="radio-option">Licenciatura em Pedagogia</span>
          </label>

          <label for="licenciaturaQuimica">
            <input
              type="radio"
              name="setor"
              id="licenciaturaQuimica"
              value="Licenciatura em Química"
            />
            <span class="radio-option">Licenciatura em Química</span>
          </label>

          <label for="licenciaturaInterdisciplinarCienciaNaturaisMatematica">
            <input
              type="radio"
              name="setor"
              id="licenciaturaInterdisciplinarCienciaNaturaisMatematica"
              value="Licenciatura Interdisciplinar em Ciências Naturais e Matemática"
            />
            <span class="radio-option">
              Licenciatura Interdisciplinar em Ciências Naturais e Matemática
            </span>
          </label>

          <h3>Listagem de passageiros</h3>

          <form id="passageiro">
            <label>
              <input
                placeholder="Nome completo do passageiro"
                type="text"
                class="passageiroNome"
                id="passageiroNome"
              />
              <input
                placeholder="Documento de identificação, SIAPE ou matrícula"
                type="text"
                class="passageiroDocumento"
                id="passageiroDocumento"
              />
            </label>
          </form>
          <p id="listaPassageiros"></p>
          <button form="passageiro" onclick="adicionarPassageiro()">
            Adicionar passageiro
          </button>

          <button form="solicitacao" onclick="enviarSolicitacao()">
            Enviar dados
          </button>
        </form>

        <Footer />
      </>
    )
  }

  return <NaoLogado />
}

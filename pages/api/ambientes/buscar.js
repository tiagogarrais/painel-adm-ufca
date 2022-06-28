import connect from '../../../lib/mongodb-ambientes'

export default async function buscarSala(request, response) {
  const { db } = await connect()
  const sala = await db
    .collection('ambientes')
    .findOne({ numeroIdentificacao: 35 })
  response.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate')
  response.status(200).json(sala)
}


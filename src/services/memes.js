import axios from 'axios'

const baseUrl = '/api/memes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('response', response.data)
  return response.data
}

// const create = async ({ data }) => {
//   const request = await axios.post(baseUrl, data)
// }

const memesService = {
  getAll,
}

export default memesService

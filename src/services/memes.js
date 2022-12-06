import axios from 'axios'

const baseUrl = 'http://localhost:3001/memes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async ({ data }) => {
  const request = await axios.post(baseUrl, data)
}

const memesService = {
  getAll,
}

export default memesService

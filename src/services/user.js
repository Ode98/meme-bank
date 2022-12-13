import axios from 'axios'

const baseUrl = '/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async ({ username, password }) => {
  const request = await axios.post(baseUrl, {
    username,
    password,
  })
  return request.data
}

const userService = {
  getAll,
  create,
}

export default userService

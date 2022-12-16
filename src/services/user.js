import axios from 'axios'

const baseUrl = '/api/users'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getUserLikedMemes = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.get('/api/users/likedMemes', config)
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
  getUserLikedMemes,
  setToken,
}

export default userService

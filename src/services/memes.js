import axios from 'axios'

const baseUrl = '/api/memes'
const postImgUrl = '/api/images'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const formImageData = (img) => {
  const formdata = new FormData()
  formdata.append('file', img)
  return formdata
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (img) => {
  const config = {
    headers: { Authorization: token },
  }
  const imageUrl = await axios.post(postImgUrl, formImageData(img))
  const request = await axios.post(
    baseUrl,
    {
      url: imageUrl.data.data,
    },
    config
  )
  return request.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

const memesService = {
  getAll,
  create,
  setToken,
  update,
}

export default memesService

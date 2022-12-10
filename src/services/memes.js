import axios from 'axios'

const baseUrl = '/api/memes'
const postImgUrl = '/api/images'

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
  const imageUrl = await axios.post(postImgUrl, formImageData(img))
  const request = await axios.post(baseUrl, {
    url: imageUrl.data.data,
  })
  return request.data
}

const memesService = {
  getAll,
  create,
}

export default memesService

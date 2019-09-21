import Axios from 'axios'

const AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
})

export default AxiosInstance

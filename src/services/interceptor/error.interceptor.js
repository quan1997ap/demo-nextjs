import axios from 'axios';
import interceptors from './interceptors';

const Api =
  axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 15000 // request timeout
  })

interceptors.setup(Api)
interceptors.checkToken(Api)

export default Api
import axios from 'axios'
const instance = axios.create({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;'
  }
})
export default instance

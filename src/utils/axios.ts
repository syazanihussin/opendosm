import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.data.gov.my/data-catalogue',
  headers: {
    'Content-Type': 'application/json',
  },
})

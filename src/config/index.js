import { create } from 'apisauce'

export const api = create({
  baseURL: 'https://newsapi.org/v1',
  timeout: 10000
})
export const apiKey = 'd23fc7c660044940bd51b556d74a9fb0'

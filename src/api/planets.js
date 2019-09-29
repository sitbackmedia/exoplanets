import {
  API_URL
} from 'config'

export const load = () => (
  fetch(API_URL, {
    method: 'GET'
  })
)

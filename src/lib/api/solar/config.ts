import { BaseFetch } from '../fetch'

const FetchSolar = new BaseFetch(process.env.ENDPOINT_SOLAR, {
  type: 'Token',
  value: process.env.TOKEN_SOLAR,
})
export { FetchSolar }

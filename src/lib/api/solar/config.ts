import { BaseFetch } from '../fetch'

const FetchSolar = new BaseFetch(process.env.SOLAR_API, {
  type: 'Token',
  value: process.env.TOKEN_SOLAR,
})
export { FetchSolar }

import { Api } from './solar-client/SolarApi'

export const solarApi = new Api({
  baseApiParams: {
    headers: { Authorization: `Token ${process.env.TOKEN_SOLAR}` },
  },
})

import { Api } from './solar-client/SolarApi'

export const SolarApi = new Api({
  baseApiParams: {
    headers: { Authorization: `Token ${process.env.TOKEN_SOLAR}` },
  },
})

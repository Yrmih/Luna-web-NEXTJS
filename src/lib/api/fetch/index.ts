import { BaseRequestInit, BaseResponse, HttpStatusCodes, Token } from './types'

export class BaseFetch {
  baseUrl: string
  token: Token

  constructor(baseUrl: string, token: Token) {
    this.baseUrl = baseUrl
    this.token = token
  }

  private async requestByBaseFetch<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS',
    endpont: string,
    options: BaseRequestInit,
    params?: Record<string, string>,
  ): Promise<BaseResponse<T>> {
    const httpCodesSucess = [
      HttpStatusCodes.OK,
      HttpStatusCodes.CREATED,
      HttpStatusCodes.ACCEPTED,
      HttpStatusCodes.NO_CONTENT,
    ]
    const queryParams = new URLSearchParams(params).toString()
    const requestUrl = `${this.baseUrl}${endpont}?${queryParams}`

    const defaultHeaders: HeadersInit = {
      Accept: 'application/json',
      Authorization: `Token ${process.env.TOKEN_SOLAR}`,
    }
    const headers = {
      ...defaultHeaders,
      ...options.headers,
    }

    const definedOptions = {
      ...options,
      headers,
      method,
    }

    try {
      const responseFetched = await fetch(requestUrl, definedOptions)
      const data = (await responseFetched.json()) as T
      if (httpCodesSucess.includes(responseFetched.status)) {
        const response: BaseResponse<T> = {
          status: responseFetched.status,
          success: true,
          data,
        }
        return response
      } else {
        const response: BaseResponse<T> = {
          status: responseFetched.status,
          success: false,
          data,
        }
        return response
      }
    } catch (error) {
      throw Error('Erro na serialização da resposta')
    }
  }

  async get<T>(
    endpont: string,
    options: BaseRequestInit,
    params: Record<string, string>,
  ): Promise<BaseResponse<T>> {
    return await this.requestByBaseFetch<T>('GET', endpont, options, params)
  }

  async post<T, B>(
    endpoint: string,
    options: BaseRequestInit,
    body: B,
    params: Record<string, string>,
  ): Promise<BaseResponse<T> | void> {
    this.requestByBaseFetch<T | unknown>(
      'POST',
      endpoint,
      {
        ...options,
        ...(body !== undefined && { body: JSON.stringify(body) }),
      },
      params,
    )
  }

  async put<T, B>(
    endpoint: string,
    options: BaseRequestInit,
    body: B,
    params: Record<string, string>,
  ): Promise<BaseResponse<T> | void> {
    this.requestByBaseFetch<T | unknown>(
      'POST',
      endpoint,
      {
        ...options,
        ...(body !== undefined && { body: JSON.stringify(body) }),
      },
      params,
    )
  }

  async patch<T, B>(
    endpoint: string,
    options: BaseRequestInit,
    body: B,
    params: Record<string, string>,
  ): Promise<BaseResponse<T> | void> {
    this.requestByBaseFetch<T | unknown>(
      'POST',
      endpoint,
      {
        ...options,
        ...(body !== undefined && { body: JSON.stringify(body) }),
      },
      params,
    )
  }

  async delete<T>(
    endpont: string,
    options: BaseRequestInit,
    params: Record<string, string>,
  ): Promise<BaseResponse<T> | void> {
    return await this.requestByBaseFetch<T>('GET', endpont, options, params)
  }
}

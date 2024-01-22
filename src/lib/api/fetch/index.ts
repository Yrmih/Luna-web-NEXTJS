import {
  BaseResponse,
  FetchOptions,
  FetchOptionsWithMethods,
  HttpMethod,
  HttpStatusCodes,
  Token,
} from './types'

export class BaseFetch {
  baseUrl: string
  token: Token
  private readonly pathValuePlaceHolder = '{pathValue}'

  constructor(baseUrl: string, token: Token) {
    this.baseUrl = baseUrl
    this.token = token
  }

  private addPathValues(
    templateEndpoint: string,
    pathValues: string[] | number[],
  ) {
    let result = templateEndpoint
    if (pathValues.length > 0) {
      for (const pathValue of pathValues) {
        result = result.replace(this.pathValuePlaceHolder, pathValue.toString())
      }
    } else {
      result = result.replace(this.pathValuePlaceHolder, '')
    }
    return result
  }

  private addSearchParamsToEndpoint(
    endpoint: string,
    params: Record<string, string | string[]>,
  ) {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // If the value is an array, repeat the key for each array element
        value.forEach((arrayValue) => {
          queryParams.append(key, arrayValue)
        })
      } else {
        // If the value is not an array, use the key as is
        queryParams.append(key, value.toString())
      }
    })

    const result = `${endpoint}${
      queryParams ? `?${queryParams.toString()}` : ''
    }`

    return result
  }

  private buildEndpoint(
    endpoint: string[],
    pathValues?: string[] | number[],
    params?: Record<string, string | string[]>,
  ): string {
    let result = '/'
    for (const path of endpoint) {
      result =
        result +
        `${path}${
          pathValues !== undefined ? `/${this.pathValuePlaceHolder}/` : ''
        }`
    }
    if (pathValues !== undefined) {
      result = this.addPathValues(result, pathValues)
    }
    if (params !== undefined) {
      result = this.addSearchParamsToEndpoint(result, params)
    }
    return result
  }

  private getUrlToRequest(
    endpoint: string[],
    pathValues?: string[] | number[],
    params?: Record<string, string | string[]>,
  ) {
    const endpointBuilt = this.buildEndpoint(endpoint, pathValues, params)
    const requestUrl = `${this.baseUrl}${endpointBuilt}`
    // clear url and return
    return requestUrl.replace(/\/+/g, '/')
  }

  private async requestByBaseFetch<T>(
    options: FetchOptionsWithMethods,
  ): Promise<BaseResponse<T>> {
    const httpCodesSucess = [
      HttpStatusCodes.OK,
      HttpStatusCodes.CREATED,
      HttpStatusCodes.ACCEPTED,
      HttpStatusCodes.NO_CONTENT,
    ]

    const defaultHeaders: HeadersInit = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.TOKEN_SOLAR}`,
    }
    const headers = {
      ...defaultHeaders,
      ...options.requestInit?.headers,
    }

    const definedOptions = {
      ...options.requestInit,
      headers,
      method: options.method,
    }
    const requestUrl = this.getUrlToRequest(
      options.endpoint,
      options.pathValues,
      options.params,
    )
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

  private async requestByFetch<T, B = undefined>(
    method: HttpMethod,
    options: FetchOptions,
    body?: B,
  ) {
    return await this.requestByBaseFetch<T>({
      ...options,
      method,
      requestInit: {
        ...(body !== undefined && { body: JSON.stringify(body) }),
      },
    })
  }

  async get<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch<T, B>('GET', options, body)
  }

  async post<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch<T, B>('POST', options, body)
  }

  async put<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch<T, B>('PUT', options, body)
  }

  async patch<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch<T, B>('PATCH', options, body)
  }

  async delete<T, B = undefined>(
    options: FetchOptions,
    body?: B,
  ): Promise<BaseResponse<T>> {
    return await this.requestByFetch<T, B>('DELETE', options, body)
  }
}

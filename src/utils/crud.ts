import { AxiosRequestConfig } from 'axios'

import { api } from './axios'

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
  baseURL?: string,
): Promise<T> => {
  const { data } = await api.request<T>({
    method: 'GET',
    url,
    baseURL: baseURL ?? api.defaults.baseURL,
    ...config,
  })
  return data
}

export const post = async <T>(
  url: string,
  body: unknown,
  config?: AxiosRequestConfig,
  baseURL?: string,
): Promise<T> => {
  const { data } = await api.request<T>({
    method: 'POST',
    url,
    data: body,
    baseURL: baseURL ?? api.defaults.baseURL,
    ...config,
  })
  return data
}

export const put = async <T>(
  url: string,
  body: unknown,
  config?: AxiosRequestConfig,
  baseURL?: string,
): Promise<T> => {
  const { data } = await api.request<T>({
    method: 'PUT',
    url,
    data: body,
    baseURL: baseURL ?? api.defaults.baseURL,
    ...config,
  })
  return data
}

export const deleter = async <T>(
  url: string,
  config?: AxiosRequestConfig,
  baseURL?: string,
): Promise<T> => {
  const { data } = await api.request<T>({
    method: 'DELETE',
    url,
    baseURL: baseURL ?? api.defaults.baseURL,
    ...config,
  })
  return data
}

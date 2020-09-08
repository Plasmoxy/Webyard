import axios from 'axios'

export const HOST = "http://api.programator.sk"

export const apiGet = <T = any>(path: string) => axios.get<T>(`${HOST}/${path}`)

export const apiPost = <T = any>(path: string, data: any) => axios.post<T>(`${HOST}/${path}`, data)

export const apiDelete = <T = any>(path: string) => axios.delete<T>(`${HOST}/${path}`)

export function getApiImageUrl(path: string, w = 300, h = 150) {
  return `${HOST}/images/${w}x${h}/${path}`
}
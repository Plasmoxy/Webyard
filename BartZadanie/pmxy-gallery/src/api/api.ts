import axios from 'axios'

export const HOST = "http://api.programator.sk"

export async function apiGet<T = any>(path: string) {
  return <T> (await axios.get(`${HOST}/${path}`))?.data
}

export async function apiPost<T = any>(path: string, data: any) {
  return <T> (await axios.post(`${HOST}/${path}`, data))?.data
}

export async function apiDelete<T = any>(path: string) {
  return <T> (await axios.delete(`${HOST}/${path}`))?.data
}

export function getApiImageUrl(path: string, w = 300, h = 150) {
  return `${HOST}/images/${w}x${h}/${path}`
}
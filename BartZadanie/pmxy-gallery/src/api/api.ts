import axios from 'axios'

export const HOST = "http://api.programator.sk"

export async function fetchApiData<T = any>(path: string) {
  return <T> (await axios.get(`${HOST}/${path}`))?.data
}

export function getApiImageUrl(path: string, w = 300, h = 150) {
  return `${HOST}/images/${w}x${h}/${path}`
}
import axios from 'axios'

export const APPHOST = 'localhost:8099'


export async function apiGet<T = any>(path: string) {
  return (await axios.get<T>(`${APPHOST}/${path}`))?.data
}

export async function apiPost<T = any>(path: string, data: any) {
  return (await axios.post<T>(`${APPHOST}/${path}`, data))?.data
}

export async function apiDelete<T = any>(path: string) {
  return (await axios.delete<T>(`${APPHOST}/${path}`))?.data
}

export function getApiImageUrl(path: string, w = 300, h = 150) {
  return `${APPHOST}/images/${w}x${h}/${path}`
}

export function getImageUrl(path: string) {
  return `${APPHOST}/images/{path}`
}

export function getThumbnailUrl(path: string) {
  return `${APPHOST}/thumbnails/{path}`
}

export async function createGallery(name: string) {
  return await apiPost("gallery", {name})
}

export async function fetchGallery(path: string) {
  return await apiGet(`gallery/${path}`)
}

export async function fetchAllGalleries() {
  return await apiGet("gallery")
}
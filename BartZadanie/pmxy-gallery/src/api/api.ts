

export const HOST = "http://api.programator.sk"

export function getImageUrl(path: string, w = 300, h = 150) {
  return `${HOST}/image/${w}x${h}/${path}`
}
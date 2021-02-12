export type DbModel = {
  galleries: Gallery[],
  imags: GalleryImage[],
}

export type GalleryImage = {
  path: string,
  name: string,
}

export type Gallery = {
  path: string,
  name: string,
  image?: GalleryImage
}


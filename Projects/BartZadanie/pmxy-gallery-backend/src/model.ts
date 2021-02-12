export type DbModel = {
  galleries: Gallery[],
}

export type GalleryImage = {
  path: string,
  name: string,
}

export type Gallery = {
  path: string,
  name: string,
  image?: GalleryImage,
  images: GalleryImage[]
}


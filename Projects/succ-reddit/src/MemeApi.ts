
export type Meme = {
  postLink: string,
  title: string,
  url: string,
}

export type MemesResponse = {
  count: number,
  memes: Meme[],
  subreddit: string
}

export async function fetchMemes(subreddit: string = "dankmemes", amount: number = 1) {
  const resp = await fetch(`https://meme-api.herokuapp.com/gimme/${subreddit}/${amount}`)
  return (await resp.json() as MemesResponse)
}
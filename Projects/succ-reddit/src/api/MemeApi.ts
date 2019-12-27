
export type Meme = {
  postLink: string,
  title: string,
  url: string
}

// tuple of [post, comments]
export type RedditPostResponseJSON = [

  // posts
  {
    data: {
      // its just 1-element tuple
      children: [{

        // THE ACTUAL POST DATA!
        data: {
          subreddit: string,
          title: string,
          url: string,
          permalink: string // doesn't have https://reddit.com appended in front!!
        }
      }]
    }
  },
  
  // comments
  {
    data: {
      children: {}[]
    }
  }[]
]

export async function fetchRandomMeme(targetSubreddit: string = "dankmemes") {
  const resp = await (
    await fetch(`https://www.reddit.com/r/${targetSubreddit}/random.json`)
  ).json() as RedditPostResponseJSON // it response with posts array

  const post = resp[0].data.children[0].data

  const meme: Meme = {
    postLink: "https://reddit.com" + post.permalink,
    url: post.url,
    title: post.title
  }

  console.log(meme)

  return meme
}
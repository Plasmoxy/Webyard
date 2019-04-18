const request = require("request")
const url = "https://api.chucknorris.io/jokes/random"

interface Joke {
  category: string
  url: string
  id: string
  value: string
}

async function getJoke(): Promise<Joke> {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json as Joke
  } catch (error) {
    console.log(error);
  }
}

async function allJokes() {
  let j = await getJoke()
  console.log(j)
}

allJokes()
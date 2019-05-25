import React from "react";

const url = "https://api.memeload.us/v1/random.php"

interface Meme {
  id: string
  title: string
  subreddit: string
  author: string
  image: string
}

interface Props {

}

interface State {
    data: Meme | null
}

export default class extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({ data: result as Meme })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { data } = this.state
    if (data) {
      return <div className="text-center">
        <div className="align-center">
          <h1>{data.title}</h1>
          <p>/r/{data.subreddit}</p>
          <p>Author: {data.author}</p>
          <img className="w-100" alt="meme" src={data.image} />
        </div>
      </div>
    } else {
      return <h1>Loading...</h1>
    }
  }
}
import React, { Component } from 'react';
import { Fetch } from 'react-request';

const url = "https://api.chucknorris.io/jokes/random"

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [
                <Joke />
            ]
        }
    }

    newJoke() {
        console.log("New joke generated!")
        this.setState(prev => ({
            jokes: [<Joke />]
        }))
    }

    render() { return <div className="card bg-dark text-light m-3 p-2 text-center">
        {this.state.jokes}
        <div>
            <button className="btn btn-primary" onClick={this.newJoke.bind(this)}>New joke</button>
        </div>
    </div>}
}

export class Joke extends Component {
  constructor(props) {
      super(props)
      this.forceUpdate()
  }
  render() {
    return (
      <Fetch url={url} >
        {({ fetching, failed, data }) => {
          if (fetching) {
            return <div>Loading joke ...</div>;
          }

          if (failed) {
            return <div>Network error !</div>;
          }

          if (data) {
            return (
              <div>
                {data.value}
              </div>
            );
          }

          return null;
        }}
      </Fetch>
    );
  }
}
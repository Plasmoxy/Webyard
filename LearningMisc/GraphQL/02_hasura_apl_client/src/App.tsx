import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from "react"
import { render } from "react-dom"
import './App.scss'
import { Container } from 'react-bootstrap'
import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.uri,
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.secret!
  },
  connectToDevTools: true
});

type Query = {
  users: [{
    id: string
    name: string
  }]
}

function App() {
  
  const q = useQuery<Query>(gql`
    query Users {
      users {
        id
        name
      }
    }
  `,);
  
  if (q.error) console.log(q)
  
  return <>
    <Container className="app-content">
      {q.data && q.data.users.map(user => <li>
        {user.name} [{user.id}]
      </li>)}
    </Container>
  </>
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("reactRoot")
)

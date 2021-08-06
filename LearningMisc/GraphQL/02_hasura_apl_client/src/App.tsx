import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from "react"
import { render } from "react-dom"
import './App.scss'
import { Container, Spinner } from 'react-bootstrap'
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

type User = {
  id: string
  name: string
}

type Query = {
  [x: string]: any
  users: User[]
  todos: {
    user: User
    id: string
    text: string
  }[]
}

function App() {
  
  const qUsers = useQuery<Query>(gql`
    {
      users {
        id
        name
      }
    }
  `,);
  
  const qTodos = useQuery<Query>(gql`
    {
      todos {
        user {
          id
          name
        }
        id
        text
      }
    }
  `,);
  
  if (qUsers.error) console.log(qUsers.error)
  if (qTodos.error) console.log(qTodos.error)
  
  return <>
    <Container className="app-content">
      
      <h2>Users:</h2>
      {qUsers.data
        ? qUsers.data.users.map(user => <li key={user.id}>
            {user.name} [{user.id}]
          </li>)
        : <Spinner animation="grow" />
      }
      <hr />
      
      <h2>Todos: </h2>
      {qTodos.data
        ? qTodos.data.todos.map(todo => <li key={todo.id}>
          {todo.text} [u: {todo.user.id}:{todo.user.name}] [{todo.id}]
        </li>)
        : <Spinner animation="grow" />
      }
      
    </Container>
  </>
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("reactRoot")
)

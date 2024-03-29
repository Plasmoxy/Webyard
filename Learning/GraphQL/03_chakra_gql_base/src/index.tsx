import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'focus-visible/dist/focus-visible';
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

})

export const apolloClient = new ApolloClient({
  uri: process.env.uri ?? '',
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.hasuraSecret ?? ''
  },
  connectToDevTools: true
});

render(
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('reactRoot')
)

import * as React from 'react'

interface AppProps {
    message: string,
}

export default ({ message }: AppProps ) => (
    <h1>Hello {message}</h1>
)
// react
import * as React from 'react'
import { render } from 'react-dom'
import '../src/App.scss'

interface AppProps {
    
}

export const App = (p: AppProps) => <div className="container mt-3">
    
</div>


render(
    <App />,
    document.getElementById('app'),
)
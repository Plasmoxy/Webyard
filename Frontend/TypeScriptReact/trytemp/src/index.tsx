// react
import * as React from 'react'
import { render } from 'react-dom'
import '../src/style.scss'

interface AppProps {
    
}

export const App = (p: AppProps) => <div>
    <h1 className="text-warning">
        Hello !!
    </h1>
</div>


render(
    <App />,
    document.getElementById('app'),
)
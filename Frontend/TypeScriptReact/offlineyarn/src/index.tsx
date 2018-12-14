// react
import * as React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import '../src/style.scss'

interface AppProps {
    
}

export const App = (p: AppProps) => <div className="container mt-3">
    <div className="ui button">
    BOI
    </div>
</div>


render(
    <App />,
    document.getElementById('app'),
)
import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      useNextVariants: true
    },
})

export const App = () => <div className="container pt-2 text-white">
    <h1>This is amazing page legit yeet.</h1>
    <Button variant="contained" color="primary">Hello</Button>
</div>

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>,
    document.getElementById("app")
)

module.hot.accept()
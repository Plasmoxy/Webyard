import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'


const muiTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp

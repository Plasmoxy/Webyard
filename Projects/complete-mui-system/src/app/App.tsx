import React from 'react';
import { Container, createMuiTheme, CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import { PeopleOutline } from '@material-ui/icons'
import Ipsum from '../components/Ipsum'

const appTheme = createMuiTheme({
  palette: {
    background: {
      default: '#f4f5f6'
    }
  },
  typography: {
    h2: {}
  }
})

const classes = makeStyles({
  app: {
  },
  bg: {
    /*
    background: 'linear-gradient(45deg, rgb(50, 50, 50) 22%, rgb(0, 0, 0) 100%)',
    display: 'block',
    position: 'fixed',
    zIndex: -100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    */
  },
  
})

function App() {
  
  const cs = classes()
  
  return <ThemeProvider theme={appTheme}>
    <div className={cs.bg}></div>
    <Header />
    <Container className={cs.app}>
      <PageHeader icon={<PeopleOutline/>} title="Bryndzové halušky" subtitle="Veru fajné halušky predávame zdarma." />
      <Typography variant="body1">Yyayaya</Typography>
      <Ipsum />
    </Container>
    <CssBaseline />
  </ThemeProvider>
}

export default App;

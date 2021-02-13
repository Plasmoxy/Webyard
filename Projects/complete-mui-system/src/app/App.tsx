import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core'
import Header from '../components/Header'

const classes = makeStyles({
  app: {
    color: 'green',
  }
})

function App() {
  
  const cs = classes()
  
  return <>
    <div className={cs.app}>
      <Header />
    </div>
    <CssBaseline />
  </>
}

export default App;

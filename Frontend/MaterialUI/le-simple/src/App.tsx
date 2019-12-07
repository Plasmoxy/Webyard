import { Plugins } from '@capacitor/core';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import './App.css';
import { MovieList } from './Components/MovieList';
import { MovieProvider } from './Context/MovieContext';
import Exercises from './Exercises';
import { Footer, Header } from './Layouts';

const { Toast, LocalNotifications } = Plugins;

const useStyles = makeStyles({
  input: {
    height: 40
  },
  m: {margin: 5}
})

async function show() {
  await Toast.show({
    text: 'Hello!'
  });
}

async function notify(msg: string) {
  LocalNotifications.schedule({
    notifications: [
      {
        title: "JEBEM XDDDDDDDDDDDDDDDDD",
        body: msg,
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
      }
    ]
  });
}

export const App: React.FC = props => {

  const c = useStyles()

  const [inputName, setInputName] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log([inputName, inputPassword])
    notify("Logging in as " + inputName)
  }

  return <MovieProvider>
    <Header />

    <div style={{margin: 20}}>
      
      <MovieList />

      <Exercises />
      <Footer />

      <Button variant="contained" onClick={show}>Toast</Button>
      
      <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{margin: 30}} >

        <TextField value={inputName} onChange={e => setInputName(e.target.value)} className={c.m} label="Meno" variant="outlined" /><br></br>
        <TextField value={inputPassword} onChange={e => setInputPassword(e.target.value)} className={c.m} label="Heslo" variant="outlined" type="password" /><br></br>
        <Button className={c.m} type="submit" variant="contained" color="primary">Prihlásiť sa</Button><br></br>
      </form>
    </div>
  </MovieProvider>
}

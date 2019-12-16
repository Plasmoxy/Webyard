import { Box, Card, Container, Grid, makeStyles, Theme, createStyles, TextField, OutlinedInput, Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

function bratislavuj(text: string) {
  return text
    .replace("ď", "d")
    .replace("ť", "t")
    .replace("ň", "n")
    .replace("ľ", "l")
    .replace("i", "y")
}

const App: React.FC = () => {

  const cc = useStyles()
  const [origText, setOrigText] = useState("")
  const [novyText, setNovyText] = useState("")

  function onOrigChange(s: string) {
    setOrigText(s)
    setNovyText(bratislavuj(s))
  }

  return <Container style={{marginTop: 20}} maxWidth="md">
    <Grid container spacing={2}>

      <Grid item alignContent="center" xs={12}>
        <Typography align="center" variant="h2" color="primary">
          Bratislavčinovač
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Napisaj sem text..."
          variant="outlined"
          multiline
          value={origText}
          onChange={e => onOrigChange(e.target.value)}
          fullWidth>

        </TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField 
          label="Tu sa zobrazi SPECIALNY TEXT V NARECI!!!!"
          variant="outlined"
          multiline
          InputProps={{readOnly: true}}
          value={novyText}
          onChange={e => {}}
          fullWidth>

        </TextField>
      </Grid>

    </Grid>
  </Container>
}

export default App;

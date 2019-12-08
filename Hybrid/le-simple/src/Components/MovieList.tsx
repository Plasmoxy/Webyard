import { Button, Card, CardContent, Fade, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField, Container, Box } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import CloseIcon from '@material-ui/icons/Close'
import MovieIcon from "@material-ui/icons/Movie"
import { makeStyles } from "@material-ui/styles"
import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../Context/MovieContext"
import { Movie } from '../Model'

const useStyles = makeStyles({
  round: { borderRadius: 7 },
  greyBg: { backgroundColor: grey[100] },

})

export const MovieListItem: React.FC<{ movie: Movie }> = ({ movie }) => {

  const { round, greyBg } = useStyles()
  const [, setMovies] = useContext(MovieContext)!!
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  function deleteMovie() {
    // allow all movies that aren't that movie
    setMovies(prev => prev.filter(m => m.id !== movie.id))
  }

  return (
    <Fade in={visible} timeout={500}>
      <ListItem className={[round, greyBg].join(" ")} style={{marginTop: 5}} >
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary={movie.name} secondary={"Price: " + movie.price} />
        {"id=" + movie.id}
        <IconButton
          key="close"
          aria-label="close"
          style={{marginLeft: 10}}
          onClick={deleteMovie}
          color="inherit">
          <CloseIcon/>
        </IconButton>
      </ListItem>
    </Fade>
  )
}

export const MovieList: React.FC = () => {

  const ss = useStyles()
  const [movies, setMovies] = useContext(MovieContext)!!
  const [nameText, setNameText] = useState("")
  
  
  function addNewMovie() {
    setMovies(prev => [...prev, new Movie("kys", Math.random()) ])
  }

  return <Container maxWidth="md">

    <Card>
        <CardContent>
          <List component="nav">
            {movies.map(movie => (
              <MovieListItem movie={movie} key={movie.id} />
            ))}
            
          </List>
        </CardContent>
    </Card>

    <Box>
      <TextField variant="outlined" value={nameText} onChange={e => setNameText(e.target.value)} />
      <Button variant="contained" color="primary" onClick={addNewMovie}>Add new movie</Button>
    </Box>

  </Container>
}

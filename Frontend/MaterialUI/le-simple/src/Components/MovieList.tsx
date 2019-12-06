import { Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton } from "@material-ui/core"
import MovieIcon from "@material-ui/icons/Movie"
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from "@material-ui/styles"
import React, { useContext } from "react"
import { MovieContext } from "../Context/MovieContext"
import { Movie } from '../Model'

const useStyles = makeStyles({

  card: {
    maxWidth: 360,
    margin: "auto",
    marginTop: 30,
    marginBottom: 30
  },

  round: { borderRadius: 7 },
  centered: { textAlign: 'center' },

})

export const MovieListItem: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { round } = useStyles()
  const [, setMovies] = useContext(MovieContext)!!

  function deleteMovie() {
    // allow all movies that aren't that movie
    setMovies(prev => prev.filter(m => m.id !== movie.id))
  }

  return (
    <ListItem className={round} >
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
  )
}

export const MovieList: React.FC = () => {

  const classes = useStyles()
  const [movies, setMovies] = useContext(MovieContext)!!
  
  function addNewMovie() {
    console.log("CLICC")
    setMovies(prev => [...prev, new Movie("kys", Math.random()) ])
  }

  return <>
    <Card className={classes.card}>
        <CardContent>
          <List component="nav">
            {movies.map(movie => (
              <MovieListItem movie={movie} key={movie.id} />
            ))}
            
          </List>
          <Typography variant="subtitle1" align="center">(click to delete)</Typography>
        </CardContent>
    </Card>

    <div className={classes.centered}>
      <Button variant="contained" color="primary" onClick={addNewMovie}>Add new movie</Button>
    </div>

  </>
}

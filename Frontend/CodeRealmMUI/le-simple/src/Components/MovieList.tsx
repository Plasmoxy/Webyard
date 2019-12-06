import React, { useState, useContext } from "react"
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  createStyles,
  Card,
  CardContent,
  Box,
  Button,
  Typography
} from "@material-ui/core"
import MovieIcon from "@material-ui/icons/Movie"
import { makeStyles } from "@material-ui/styles"
import { Movie } from '../Model'
import { MovieProvider, MovieContext } from "../Context/MovieContext"

const useStyles = makeStyles({

  card: {
    maxWidth: 360,
    margin: "auto",
    marginTop: 30,
    marginBottom: 30
  },

  round: { borderRadius: 7 }

})

export const MovieListItem: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { round } = useStyles()
  const [movies, setMovies] = useContext(MovieContext)!!

  function deleteMovie() {
    // allow all movies that aren't that movie
    setMovies(movies.filter(m => m.id != movie.id))
  }

  return (
    <ListItem button className={round} onClick={deleteMovie}>
      <ListItemIcon>
        <MovieIcon />
      </ListItemIcon>
      <ListItemText primary={movie.name} secondary={"Price: " + movie.price} />
      {"id=" + movie.id}
    </ListItem>
  )
}

export const MovieList: React.FC = () => {

  const classes = useStyles()
  const [movies, setMovies] = useContext(MovieContext)!!
  
  function addNewMovie() {
    console.log("CLICC")
    setMovies([...movies, new Movie("kys", Math.random()) ])
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

    <Button variant="contained" color="primary" onClick={addNewMovie}>Add new movie</Button>

  </>
}

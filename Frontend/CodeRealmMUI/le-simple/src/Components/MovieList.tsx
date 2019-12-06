import React, { useState } from "react"
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  createStyles,
  Card,
  CardContent,
  Box
} from "@material-ui/core"
import MovieIcon from "@material-ui/icons/Movie"
import { makeStyles } from "@material-ui/styles"
import { Movie } from '../Model'

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

  return (
    <ListItem button className={round}>
      <ListItemIcon>
        <MovieIcon />
      </ListItemIcon>
      <ListItemText primary={movie.name} secondary={"Price: " + movie.price} />
    </ListItem>
  )
}

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState([
    new Movie("Harry Potter", 10),
    new Movie("Game of Thrones", 9)
  ])

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <List component="nav">
          {movies.map(movie => (
            <MovieListItem movie={movie} key={movie.name} />
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

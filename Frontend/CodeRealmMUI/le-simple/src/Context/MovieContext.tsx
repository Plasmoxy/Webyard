import React, { useState, createContext } from 'react'
import { Movie } from '../Model'

export type IMovieContext = [
    Movie[],
    (movies: Movie[]) => any
]

export const MovieContext = createContext<IMovieContext|null>(null)

export const MovieProvider = (props: any) => {

    const [movies, setMovies] = useState([
        new Movie("Harry Potter", 10),
        new Movie("Game of Thrones", 9)
    ])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
    )
}
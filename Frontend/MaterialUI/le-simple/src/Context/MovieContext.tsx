import React, { useState, createContext } from 'react'
import { Movie } from '../Model'

const initMovies = [
    new Movie("Star Wars", 1000),
    new Movie("Star Trek", 10),
    new Movie("Shrek", 69)
]

export type IMovieContext = [
    Movie[],
    (f: (movies: Movie[]) => any) => any
]

export const MovieContext = createContext<IMovieContext|null>(null)

export function MovieProvider(props: any) {

    const [movies, setMovies] = useState(initMovies)

    return(
        <MovieContext.Provider value={[movies, setMovies]} {...props} />
    )
}
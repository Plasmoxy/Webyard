import React from 'react';
import './App.css';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { MovieList } from './Components/MovieList';

export const App: React.FC = () => {
  return <>
    <Header />

    <MovieList />

    <Exercises />
    <Footer />
  </>
}


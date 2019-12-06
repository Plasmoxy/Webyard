import React from 'react';
import './App.css';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { MovieList } from './Components/MovieList';
import { MovieProvider } from './Context/MovieContext';

export const App: React.FC = () => {

  return <>
    <Header />

    <div style={{margin: 20}}>
      
      <MovieProvider>
        <MovieList />
      </MovieProvider>

      <Exercises />
      <Footer />
    </div>
  </>
}


import React, { useEffect } from 'react';
import './App.css';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { MovieList } from './Components/MovieList';
import { MovieProvider } from './Context/MovieContext';
import { Plugins } from '@capacitor/core'
const { SplashScreen } = Plugins

export const App: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return <MovieProvider>
    <Header />

    <div style={{margin: 20}}>
      
      <MovieList />

      <Exercises />
      <Footer />
    </div>
  </MovieProvider>
}


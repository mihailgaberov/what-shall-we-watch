import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/homepage'
import MovieList from './pages/list'

import './App.scss'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [movies, setMovies] = useState([])

  const showMostPopular = () => {
    console.log('show popular')
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }
  
  const showMostLuckyMatch = () => {
    console.log('show lucky')
  }

  const clearSelection = () => setMovies([])

  return (
    <div className="app">
     <Header onClickCallback={clearSelection} />
     {movies.length === 0 && <Home popularCallback={showMostPopular} luckyCallback={showMostLuckyMatch} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  )
}

export default App

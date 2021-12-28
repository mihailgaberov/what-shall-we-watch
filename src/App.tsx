import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = 'c844cdfa1d441772b8feec1879d6b26a'

interface Movie {
  original_title: string;
  overview: string;
  popularity: string;
}

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c844cdfa1d441772b8feec1879d6b26a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      });
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        Ко Да Глеам!?
      </header>
      <div className='movies-list'>
        {movies.map((movie: Movie) => <ul className='movie'>
            <li><span className='bolded'>Title: </span><span>{movie.original_title}</span></li>
            <li><span className='bolded'>Overview: </span><span>{movie.overview}</span></li>
            <li><span className='bolded'>Popularity: </span><span>{movie.popularity}</span></li>
          </ul>)}
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY

/**
 * "backdrop_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "w780",
      "w1280",
      "w1920",
      "original"
    ],
    "logo_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    "poster_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    "profile_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "h632",
      "original"
    ],
    "still_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "original"
    ]
 */

interface Movie {
  original_title: string;
  overview: string;
  popularity: string;
  backdrop_path: string;
}

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
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
        {movies.map((movie: Movie, idx) => <ul className='movie' key={idx}>
            <li><span className='bolded'>Title: </span><span>{movie.original_title}</span></li>
            <li><span className='bolded'>Overview: </span><span>{movie.overview}</span></li>
            <li><span className='bolded'>Popularity: </span><span>{movie.popularity}</span></li>
            <li><img src={'http://image.tmdb.org/t/p/w154' + movie.backdrop_path + `?api_key=${API_KEY}`} alt='tsest'/></li>
          </ul>)}
      </div>
    </div>
  )
}

export default App

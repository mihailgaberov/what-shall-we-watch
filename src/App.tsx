import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/homepage'
import MovieList from './pages/list'

import './App.scss'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [movies, setMovies] = useState([])
  let [page, setPage] = useState<number>(1)

  const fetchPage = (pageNum: number) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  }

  const showMostPopular = () => {
    fetchPage(1)
  }
  
  const showMostLuckyMatch = () => {
    fetch(`https://api.themoviedb.org/3/movie/122?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => setMovies([data])
    )
  }

  const clearSelection = () => setMovies([])

  const showPrevChunk = () => {
    if(page > 1) {
      setPage(prevPageNum => {
        const newPageNum = prevPageNum - 1
        fetchPage(newPageNum)
        return newPageNum
      })
    }
  }

  const showNextChunk = () => {
    setPage(prevPageNum => {
      const newPageNum = prevPageNum + 1
      fetchPage(newPageNum)
      return newPageNum
    })
  }

  return (
    <div className="app">
     <Header onClickCallback={clearSelection} />
     {movies.length === 0 && <Home popularCallback={showMostPopular} luckyCallback={showMostLuckyMatch} />}
      {movies.length > 0 && <MovieList pageNum={page} prevCallback={showPrevChunk} nextCallback={showNextChunk} movies={movies} />}
    </div>
  )
}

export default App

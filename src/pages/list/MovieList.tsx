import { FunctionComponent } from "react";

import Footer from '../../components/Footer'

import './MovieList.scss'

interface Movie {
  original_title: string;
  overview: string;
  vote_average: string;
  backdrop_path: string;
}

interface MovieListProps {
  movies: Movie[];
}

const API_KEY = import.meta.env.VITE_API_KEY

const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => {
  console.log(movies)
  return (
    <div className='movies-list'>
      <header>Movies</header>
      <ul className="table-header">
        <li></li>
        <li>Title</li>
        <li>Description</li>
        <li>Rating</li>
        <li>Poster</li>
      </ul>
      {movies.map((movie: Movie, idx) => <ul className='movies' key={idx}>
        <li>{idx + 1}.</li>
        <li>{movie.original_title}</li>
        <li>{movie.overview}</li>
        <li>{movie.vote_average}</li>
        <li><a href={'http://image.tmdb.org/t/p/w500' + movie.backdrop_path + `?api_key=${API_KEY}`}>
          <img src={'http://image.tmdb.org/t/p/w92' + movie.backdrop_path + `?api_key=${API_KEY}`} alt='tsest' />
        </a></li>
      </ul>)}
      <Footer prevCallback={() => console.log('prev')} nextCallback={() => console.log('next')} />
    </div>
  );
}

export default MovieList;
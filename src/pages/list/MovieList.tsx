import { FunctionComponent } from "react";

import Footer from '../../components/Footer'

import './MovieList.scss'

interface Movie {
  original_title: string;
  overview: string;
  vote_average: string;
  poster_path: string;
}

interface MovieListProps {
  movies: Movie[];
  prevCallback: Function;
  nextCallback: Function;
  pageNum: number;
}

const API_KEY = import.meta.env.VITE_API_KEY

const MovieList: FunctionComponent<MovieListProps> = ({ movies, prevCallback, nextCallback, pageNum }) => {
  console.log(movies)
  return (
    <div className='movies-list'>
      <header>Movies</header>
      <ul className="table-header">
        <li></li>
        <li>Title</li>
        <li>Description</li>
        <li>Rating</li>
      </ul>
      {movies.map((movie: Movie, idx) => {
        const orderNum: number = (idx + 1) + ((pageNum - 1) * 20)
        return <ul className='movies' key={idx}>
          <li>{orderNum}.</li>
          <li>
            <div>{movie.original_title}</div>
            {movie.poster_path && <div className="image-container"><a href={'http://image.tmdb.org/t/p/w500' + movie.poster_path + `?api_key=${API_KEY}`}>
              <img src={'http://image.tmdb.org/t/p/w92' + movie.poster_path + `?api_key=${API_KEY}`} alt='tsest' />
            </a>
            </div>}
          </li>
          <li>{movie.overview}</li>
          <li>{movie.vote_average}</li>
        </ul>;
      })}
      <Footer isPrevButtonDisabled={pageNum === 1} prevCallback={prevCallback} nextCallback={nextCallback} />
    </div>
  );
}

export default MovieList;
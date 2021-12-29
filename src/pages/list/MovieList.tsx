import { FunctionComponent } from "react";

import './MovieList.scss'

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
                <li><span className='bolded'>Title: </span><span>{movie.original_title}</span></li>
                <li><span className='bolded'>Overview: </span><span>{movie.overview}</span></li>
                <li><span className='bolded'>Rating: </span><span>{movie.vote_average}</span></li>
                <li><a href="">
                    <img src={'http://image.tmdb.org/t/p/w154' + movie.backdrop_path + `?api_key=${API_KEY}`} alt='tsest' />
                </a>
                </li>
            </ul>)}
        </div>
    );
}

export default MovieList;
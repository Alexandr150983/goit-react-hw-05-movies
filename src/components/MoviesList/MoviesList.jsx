import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

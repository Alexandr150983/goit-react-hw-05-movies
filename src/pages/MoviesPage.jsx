import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessadge';
import { fetchSearchMovies } from 'services/Api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const results = await fetchSearchMovies(query);
        setSearchResults(results.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [query]);

  const handleFormSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleFormSubmit} /> {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ul>
        {searchResults !== null &&
          searchResults.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesPage;

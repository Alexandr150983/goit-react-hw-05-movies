import { fetchTrendingMovies } from 'services/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessadge';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <h1>Trending Today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
export default HomePage;

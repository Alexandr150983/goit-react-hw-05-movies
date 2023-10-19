import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails } from 'services/Api';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessadge';
import {
  Container,
  BackLink,
  MovieTitle,
  MoviePoster,
  Overview,
  Genres,
  ReleaseDate,
  Average,
  Nav,
  Additional,
} from 'components/MovieDetailsPages.styled';

export const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const details = await fetchMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <BackLink to={backLinkHref.current}>Go Back</BackLink>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <MovieTitle>{movie.title}</MovieTitle>
      <MoviePoster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <Overview>
        <strong>Overview:</strong> {movie.overview}
      </Overview>
      <Genres>
        <strong>Genres:</strong>
        {movie.genres
          .map(genreId => {
            const genre = movie.genres.find(genre => genre.id === genreId);
            return genre ? genre.name : 'Unknown Genre';
          })
          .join(', ')}
      </Genres>
      <ReleaseDate>
        {' '}
        <strong>Release Date:</strong> {movie.release_date}
      </ReleaseDate>
      <Average>
        {' '}
        <strong>Average:</strong> {movie.vote_average}
      </Average>

      <Nav>
        <Additional>
          <ul>
            <p>Additional information</p>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </Additional>
      </Nav>
      <Outlet />
    </Container>
  );
};

export default MovieDetailsPage;

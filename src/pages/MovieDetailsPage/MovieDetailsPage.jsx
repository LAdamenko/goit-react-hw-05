import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from '../../movies-api';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function fetchMoviesDetails() {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    fetchMoviesDetails();
  }, [movieId]);

  const {
    original_title,
    overview,
    genres,
    poster_path,
    backdrop_path,
    vote_average,
  } = movieDetails;
  const score = Number(vote_average).toFixed(2);

  console.log(movieDetails);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {loading && <b>Loading movie details...</b>}
      <img
        className={css.image}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : `https://image.tmdb.org/t/p/w300${backdrop_path}`
        }
        loading="lazy"
        alt="Movie poster"
      />
      <div>
        <h1>{original_title}</h1>
        <p>User score: {score}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres &&
            genres.length > 0 &&
            genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getTrendMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      // setLoading(true);
      try {
        const data = await getTrendMovies();
        setTrendMovies(data.results);
      } catch (error) {
        console.log('error');
      } finally {
        // setLoading(false);
      }
    }

    fetchTrendMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendMovies} />
    </div>
  );
}

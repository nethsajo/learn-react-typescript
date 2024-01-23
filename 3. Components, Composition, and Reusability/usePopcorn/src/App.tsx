import axios from 'axios';
import { useEffect, useState } from 'react';
import { TMDB_API_KEY } from 'shared/constants/environments';

export default function App() {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState({});

  const handleSetPage = () => {};

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${TMDB_API_KEY}`
        );
        setPopularMovies(data);
      } catch (error) {}
    };

    handleFetchMovies();
  }, [page]);

  return <div>{JSON.stringify(popularMovies.results)}</div>;
}

import { useEffect, useState } from 'react';

import { PopularService } from './services';
import { type Popular } from './types';

export const useGetPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Popular[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await PopularService.list();
        setPopularMovies(data);
      } catch (error) {
        throw error;
      }
    };

    fetchMovies().catch(error => {
      throw new Error(`Error fetching popular movies: ${error}`);
    });
  }, []);

  return popularMovies;
};

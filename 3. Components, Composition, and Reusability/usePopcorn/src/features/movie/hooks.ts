import { useEffect, useState } from 'react';

import { MovieService } from './services';
import { type Movie, type MovieCast } from './types';

export const useGetMovie = (id: string | undefined) => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await MovieService.get(id);
        setMovie(data);
      } catch (error) {
        throw error;
      }
    };

    fetchMovie().catch(error => {
      throw new Error(`Error fetching movie: ${error}`);
    });
  }, [id]);

  return movie;
};

export const useGetMovieCasts = (id: string | undefined) => {
  const [casts, setCasts] = useState<MovieCast[]>([]);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const cast = await MovieService.getCredits(id);
        setCasts(cast);
      } catch (error) {
        throw error;
      }
    };

    fetchCasts().catch(error => {
      throw new Error(`Error fetching movie casts: ${error}`);
    });
  }, [id]);

  return casts;
};

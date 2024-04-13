import { instance } from 'shared/utils/axios';

import { type Movie, type MovieCast } from './types';

class MovieClass {
  async get(id: string | undefined) {
    const response = await instance.get(`movie/${id}`);
    return response.data as Movie;
  }

  async getCredits(id: string | undefined) {
    const response = await instance.get(`movie/${id}/credits`);
    return response.data.cast as MovieCast[];
  }
}

export const MovieService = new MovieClass();

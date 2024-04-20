import { instance } from 'shared/utils/axios';

import { type MovieCast, type MovieDetails } from './types';

class MovieClass {
  async get(id: string | undefined) {
    const response = await instance.get(`movie/${id}`);
    return response.data as MovieDetails;
  }

  async getCredits(id: string | undefined) {
    const response = await instance.get(`movie/${id}/credits`);
    return response.data.cast as MovieCast[];
  }
}

export const MovieService = new MovieClass();

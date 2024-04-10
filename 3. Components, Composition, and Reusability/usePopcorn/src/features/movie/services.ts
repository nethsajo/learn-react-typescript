import { instance } from 'shared/utils/axios';

import { type Movie } from './types';

class MovieClass {
  async get(id: string | undefined) {
    const response = await instance.get(`movie/${id}`);
    return response.data as Movie;
  }
}

export const MovieService = new MovieClass();

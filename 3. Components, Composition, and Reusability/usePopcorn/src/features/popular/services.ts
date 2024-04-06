import { instance } from 'shared/utils/axios';

import { type Popular } from './types';

class PopularClass {
  async list() {
    const response = await instance.get('movie/popular');
    const data = response.data.results as Popular[];

    return data;
  }
}

export const PopularService = new PopularClass();

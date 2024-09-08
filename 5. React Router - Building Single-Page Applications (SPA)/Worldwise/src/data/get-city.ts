import { BASE_URL } from '@/constants/common';
import { type City } from '@/types/city';

export type GetCityDataArgs = {
  id: string;
};

export async function getCityData({ id }: GetCityDataArgs): Promise<City> {
  const response = await fetch(`${BASE_URL}/cities/${id}`);
  return await response.json();
}

import { BASE_URL } from '@/constants/common';
import { type City } from '@/types/city';

export async function getCitiesData(): Promise<Array<City>> {
  const response = await fetch(`${BASE_URL}/cities`);
  return await response.json();
}

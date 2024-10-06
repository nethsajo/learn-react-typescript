import { BASE_URL } from '@/constants/common';
import { type City } from '@/types/city';

export async function createCityData(args: City) {
  const response = await fetch(`${BASE_URL}/cities`, {
    method: 'POST',
    body: JSON.stringify(args),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return await response.json();
}

import { BASE_URL } from '@/constants/common';

export type City = {
  id: string;
  cityName: string;
  country: string;
  abbreviation: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
};

export async function getCitiesData(): Promise<City[]> {
  const response = await fetch(`${BASE_URL}/cities`);
  return await response.json();
}

export async function getCityData(id: string): Promise<City> {
  const response = await fetch(`${BASE_URL}/cities/${id}`);
  return await response.json();
}

export async function createCityData(payload: City) {
  const response = await fetch(`${BASE_URL}/cities`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return await response.json();
}

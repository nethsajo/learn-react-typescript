import { API_KEY } from '@/constants/env';
import { type Coordinates } from '@/types/coordinates';

export type Location = {
  city: string;
  countryCode: string;
  countryName: string;
  locality: string;
  latitude: number;
  longitude: number;
};

export async function getPositionData({ lat, lng }: Coordinates): Promise<Location> {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${API_KEY}`
  );

  const data = await response.json();

  if (!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else 😉");

  return data;
}

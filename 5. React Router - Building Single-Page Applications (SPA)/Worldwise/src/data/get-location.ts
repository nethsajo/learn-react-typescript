import { type Location } from '@/types/location';

export type GetLocationDataArgs = {
  lat: number;
  lng: number;
};

export async function getLocationData({ lat, lng }: GetLocationDataArgs): Promise<Location> {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );

  const data = (await response.json()) as Location;

  if (!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else 😉");

  return data;
}

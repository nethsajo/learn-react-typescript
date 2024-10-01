export type GetLocationDataArgs = {
  lat: number;
  lng: number;
};

export async function getLocationData(args: GetLocationDataArgs) {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${args.lat}&longitude=${args.lng}`
  );

  const data = await response.json();

  if (!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else 😉");

  return data;
}

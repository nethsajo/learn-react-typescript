export type GetLocationDataArgs = {
  lat: number;
  lng: number;
};

export async function getLocationData(args: GetLocationDataArgs) {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${args.lat}&longitude=${args.lng}`
  );

  return await response.json();
}

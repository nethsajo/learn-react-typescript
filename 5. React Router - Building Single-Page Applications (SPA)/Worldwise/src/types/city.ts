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

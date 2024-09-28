import { type Coordinates } from '@/types/coordinates';
import { useSearchParams } from 'react-router-dom';

export function useUrlPosition(): Coordinates {
  const [searchParams] = useSearchParams();

  const latitude = Number(searchParams.get('lat'));
  const longitude = Number(searchParams.get('lng'));

  return { lat: latitude, lng: longitude };
}

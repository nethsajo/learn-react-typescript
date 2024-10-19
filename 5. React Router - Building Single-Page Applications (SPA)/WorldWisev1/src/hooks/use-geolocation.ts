import { type Coordinates } from '@/types/coordinates';
import { useState } from 'react';

export function useGeolocation(defaultPosition: Coordinates | null = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<Coordinates | null>(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  const handleGetPosition = () => {
    if (!navigator.geolocation) {
      return setError('Your browser does not support geolocation');
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      current => {
        setPosition({
          lat: current.coords.latitude,
          lng: current.coords.longitude,
        });
        setIsLoading(false);
      },
      (error: GeolocationPositionError) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  return { position, isLoading, error, handleGetPosition };
}

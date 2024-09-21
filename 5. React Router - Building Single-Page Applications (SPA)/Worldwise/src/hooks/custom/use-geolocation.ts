import { useState } from 'react';

export function useGeolocation() {
  const [position, setPosition] = useState({});
  const [error, setError] = useState<string | null>(null);

  const handleGetPosition = () => {
    if (!navigator.geolocation) {
      return setError('Your browser does not support geolocation');
    }

    navigator.geolocation.getCurrentPosition(
      current => {
        setPosition({
          lat: current.coords.latitude,
          lng: current.coords.longitude,
        });
      },
      (error: GeolocationPositionError) => {
        setError(error.message);
      }
    );
  };

  return { position, error, handleGetPosition };
}

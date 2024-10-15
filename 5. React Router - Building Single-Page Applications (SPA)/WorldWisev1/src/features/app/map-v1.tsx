import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useCities } from '@/contexts/cities';
import { useGeolocation } from '@/hooks/map/use-geolocation';
import { useUrlPosition } from '@/hooks/map/use-url-position';
import { type Coordinates } from '@/types/coordinates';
import { MapPinned } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

function CoordinateMarker({ position }: { position: Coordinates }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: event => {
      const { lat, lng } = event.latlng;
      navigate(`${ROUTES.FORM}?lat=${lat}&lng=${lng}`);
    },
  });

  return null;
}

export function MapVOne() {
  const { cities } = useCities();
  const { lat, lng } = useUrlPosition();
  const { isLoading, position, handleGetPosition } = useGeolocation();

  const [coordinates, setCoordinates] = useState<Coordinates>({ lat: 0, lng: 0 });

  // This will only run if the lat and lng search params changes
  useEffect(() => {
    if (lat && lng) setCoordinates({ lat, lng });
  }, [lat, lng]);

  // This will only run if the position changes (geolocation)
  useEffect(() => {
    if (position) setCoordinates({ lat: position.lat, lng: position.lng });
  }, [position]);

  return (
    <div className="relative order-1 h-full flex-1 overflow-hidden lg:order-2 lg:border-l lg:border-l-gray-200">
      {!position && (
        <Button
          className="absolute bottom-8 left-2/4 z-[1000] -translate-x-2/4 space-x-1 lg:bottom-16"
          onClick={handleGetPosition}
        >
          <span>{isLoading ? 'Loading...' : 'Use your position'}</span>
          <MapPinned size={20} />
        </Button>
      )}
      <MapContainer center={coordinates} zoom={6} className="h-full overflow-hidden">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => {
          return (
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
              <Popup>
                <picture className="h-6 max-h-6 w-8">
                  <img
                    src={`https://flagcdn.com/${city.abbreviation}.svg`}
                    alt={`Flag of ${city.abbreviation}`}
                    className="h-full w-full rounded-sm ring-1 ring-gray-800"
                  />
                </picture>
                <span className="self-stretch">{city.notes}</span>
              </Popup>
            </Marker>
          );
        })}
        <CoordinateMarker position={coordinates} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

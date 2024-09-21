import { ROUTES } from '@/constants/routes';
import { useCitiesQuery } from '@/hooks/query/use-cities-query';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function Map() {
  const navigate = useNavigate();
  const [coordinates, setCoordinates] = useState<[number, number]>([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: cities = [] } = useCitiesQuery();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div
      onClick={() => navigate(ROUTES.FORM)}
      className="relative order-1 flex-1 overflow-hidden border-b border-gray-600 bg-gray-700 lg:order-2 lg:rounded-br-md lg:rounded-tr-md lg:border-l"
    >
      <MapContainer center={coordinates} zoom={13} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => {
          return (
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
              <Popup>{city.notes}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

import { ROUTES } from '@/constants/routes';
import { useCitiesQuery } from '@/hooks/query/use-cities-query';
import { type LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';

function CoordinateMarker({ position }: { position: LatLngExpression }) {
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

export function Map() {
  const [coordinates, setCoordinates] = useState<LatLngExpression>([0, 0]);
  const [searchParams] = useSearchParams();
  const { data: cities = [] } = useCitiesQuery();

  const latitude = Number(searchParams.get('lat'));
  const longitude = Number(searchParams.get('lng'));

  useEffect(() => {
    if (latitude && longitude) setCoordinates([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    <div className="relative order-1 flex-1 overflow-hidden border-b border-gray-600 bg-gray-700 lg:order-2 lg:rounded-br-md lg:rounded-tr-md lg:border-l">
      <MapContainer center={coordinates} zoom={6} className="h-full">
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

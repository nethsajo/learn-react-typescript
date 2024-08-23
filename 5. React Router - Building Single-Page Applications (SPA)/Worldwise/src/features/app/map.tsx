import { useSearchParams } from 'react-router-dom';

export function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className="relative flex-1 rounded-br-md rounded-tr-md border-l border-l-gray-600 bg-gray-700">
      Map Position: {lat} {lng}
      <button onClick={() => setSearchParams({ lat: '23', lng: '50' })}>Change Position</button>
    </div>
  );
}

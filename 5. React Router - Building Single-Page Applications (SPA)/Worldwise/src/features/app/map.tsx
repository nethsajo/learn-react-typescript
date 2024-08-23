import { ROUTES } from '@/constants/routes';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div
      onClick={() => navigate(ROUTES.FORM)}
      className="relative flex-1 rounded-br-md rounded-tr-md border-l border-l-gray-600 bg-gray-700"
    >
      Map Position: {lat} {lng}
      <button onClick={() => setSearchParams({ lat: '23', lng: '50' })}>Change Position</button>
    </div>
  );
}

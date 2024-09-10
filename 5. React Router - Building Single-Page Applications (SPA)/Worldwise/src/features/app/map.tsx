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
      className="relative order-1 flex-1 border-b border-gray-600 bg-gray-700 lg:order-2 lg:rounded-br-md lg:rounded-tr-md lg:border-l"
    >
      Map Position: {lat} {lng}
      <button onClick={() => setSearchParams({ lat: '23', lng: '50' })}>Change Position</button>
    </div>
  );
}

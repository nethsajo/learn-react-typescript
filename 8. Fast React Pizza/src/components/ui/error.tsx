import { ChevronLeft } from 'lucide-react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from './button';

export const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p>{error.data}</p>
      <Button size="sm" onClick={() => navigate(-1)}>
        <ChevronLeft />
        <span>Go back</span>
      </Button>
    </div>
  );
};

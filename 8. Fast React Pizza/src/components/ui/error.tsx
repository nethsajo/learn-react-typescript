import { ChevronLeft } from 'lucide-react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { Button } from './button';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let message = '';

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Unknown error';
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p>{message}</p>
      <Button size="sm" onClick={() => navigate(-1)}>
        <ChevronLeft />
        <span>Go back</span>
      </Button>
    </div>
  );
};

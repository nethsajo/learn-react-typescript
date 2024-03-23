import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/commons';

export function NotFound() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => navigate(ROUTES.HOME);

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-2">
      <span className="text-slate-500">Sorry, the page you visited does not exist.</span>
      <button className="text-sm font-medium text-slate-400" onClick={handleNavigateToHome}>
        Back to Home
      </button>
    </div>
  );
}

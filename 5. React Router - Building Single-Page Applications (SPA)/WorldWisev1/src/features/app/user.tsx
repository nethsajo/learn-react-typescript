import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/contexts/fake-auth';
import { useNavigate } from 'react-router-dom';

export function User() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  if (!isAuthenticated || !user) return;

  return (
    <div className="absolute right-2/4 top-[10px] z-[1000] translate-x-2/4 text-black lg:right-0 lg:top-0 lg:translate-x-0">
      <div className="rounded-md border-2 border-[rgba(0,0,0,0.2)] bg-white lg:mr-16 lg:mt-[10px]">
        <div className="grid grid-cols-[32px_1fr_auto] items-center gap-2 px-2.5 py-1.5">
          <img
            src={user.avatar}
            alt={`${user.name} photo`}
            className="rounded-full ring-2 ring-gray-700"
          />
          <h2 className="text-sm text-gray-500">
            Welcome, <strong className="font-bold tracking-tight text-gray-600">{user.name}</strong>
          </h2>
          <Button
            size="default"
            variant="secondary"
            className="text-xs uppercase text-gray-200"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

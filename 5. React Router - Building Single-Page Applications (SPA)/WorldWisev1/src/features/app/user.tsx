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
    <div className="absolute right-0 top-0 z-[1000] text-black">
      <div className="mr-16 mt-[10px] rounded-md border-2 border-[rgba(0,0,0,0.2)] bg-white">
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

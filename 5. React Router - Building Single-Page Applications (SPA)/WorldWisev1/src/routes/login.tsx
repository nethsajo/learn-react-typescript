import { PageLayout } from '@/components/layout/page';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/contexts/fake-auth';
import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('password');
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    // When replace option is not set, redirecting to previous page doesn't work at all (click back and it goes forward again to the app route)
    // The reason for that is that it is already logged-in and it keeps redirecting to the app route
    // The solution to this is to not even go back to the login page
    // Specify an object with the replace option set to true
    // Once this navigation happens, it will replace the login page in the history stack with app route
    if (isAuthenticated) navigate(ROUTES.APP, { replace: true });
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (email && password) {
      login({ email, password });
    }
  };

  return (
    <PageLayout>
      <section className="mx-auto my-24 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="rounded-md bg-gray-600 p-4 shadow-sm sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="date">Email address</Label>
              <Input
                type="text"
                variant="filled"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                className="text-gray-800"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="date">Password</Label>
              <Input
                type="password"
                variant="filled"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                className="text-gray-800"
              />
            </div>
          </div>
          <Button type="submit" className="mt-6 w-full px-3.5 py-2 font-bold uppercase">
            Login
          </Button>
        </form>
      </section>
    </PageLayout>
  );
}

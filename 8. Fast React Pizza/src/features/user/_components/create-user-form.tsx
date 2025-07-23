import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/constants/routes';
import { useSessionStore } from '@/stores/use-session-store';
import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateUserForm = () => {
  const [username, setUsername] = useState('');
  const setUser = useSessionStore(s => s.setUser);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!username) return;
    setUser(username);
    navigate(ROUTES.MENU);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md rounded-2xl border border-white/20 bg-white/90 p-8 shadow-lg lg:shadow-2xl"
    >
      <div className="flex items-center justify-center space-x-3 text-center">
        <span className="text-4xl">👋</span>
        <h3 className="text-xl font-semibold text-zinc-800">Welcome! Let&apos;s get started</h3>
      </div>
      <div className="mt-6">
        <Input
          variant="outline"
          name="username"
          id="username"
          placeholder="Enter your full name"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      {username && (
        <Button type="submit" className="mt-3 flex w-full">
          Start ordering
        </Button>
      )}
      <p className="mt-3 text-center text-zinc-500">
        Join thousands of pizza lovers who trust us daily!
      </p>
    </form>
  );
};

import { PageLayout } from '@/components/layout/page';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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

import { PageLayout } from '@/components/layout/page';
import { type ChangeEvent, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('password');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <PageLayout>
      <section className="mx-auto my-24 w-full max-w-lg">
        <div className="bg-zinc-500 p-4 sm:p-6">
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-4 py-1.5 text-sm"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-1.5 text-sm"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </section>
    </PageLayout>
  );
}

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
        <form className="rounded-md bg-gray-600 p-4 shadow-sm sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-gray-200" htmlFor="email">
                Email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-slate-200 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-gray-200" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-slate-200 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-emerald-600 px-3.5 py-2 font-bold uppercase tracking-wide hover:bg-emerald-500"
          >
            Login
          </button>
        </form>
      </section>
    </PageLayout>
  );
}

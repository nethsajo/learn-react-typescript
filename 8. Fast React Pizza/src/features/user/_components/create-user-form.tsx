import { Input } from '@/components/ui/input';
import { useState } from 'react';

export const CreateUserForm = () => {
  const [fullName, setFullName] = useState('');

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-white/20 bg-white/90 p-8 shadow-lg lg:shadow-2xl">
      <div className="flex items-center justify-center space-x-3 text-center">
        <span className="text-4xl">👋</span>
        <h3 className="text-xl font-semibold text-zinc-800">Welcome! Let&apos;s get started</h3>
      </div>
      <form className="mt-6">
        <Input
          variant="outline"
          name="fullName"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
      </form>
      <p className="mt-3 text-center text-zinc-500">
        Join thousands of pizza lovers who trust us daily!
      </p>
    </div>
  );
};

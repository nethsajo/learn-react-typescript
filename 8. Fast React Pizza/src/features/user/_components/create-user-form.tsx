import { Input } from '@/components/ui/input';
import { useState } from 'react';

export const CreateUserForm = () => {
  const [fullName, setFullName] = useState('');

  return (
    <form className="space-y-3">
      <h2 className="sm:text-base">👋 Welcome! Please start by telling us your name:</h2>
      <Input
        variant="outline"
        name="fullName"
        id="fullName"
        placeholder="Enter your full name"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />
    </form>
  );
};

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/store';
import { useState, type FormEvent } from 'react';
import { create } from '../slice/customer';

export function AddCustomerForm() {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!fullName || !nationalId) return;
    dispatch(create({ fullName, nationalId }));
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-zinc-800">Create new customer</h2>
      <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="full-name" className="font-medium">
              Customer Full Name
            </Label>
            <Input
              id="full-name"
              variant="outline"
              value={fullName}
              onChange={event => setFullName(event.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="full-name" className="font-medium">
              National ID
            </Label>
            <Input
              id="full-name"
              variant="outline"
              value={nationalId}
              onChange={event => setNationalId(event.target.value)}
            />
          </div>
          <div className="flex">
            <Button className="ml-auto" type="submit">
              Create new customer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

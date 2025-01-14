import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function RequestLoan() {
  const [amount, setAmount] = useState(0);
  const [purpose, setPurpose] = useState('');

  const handleRequestLoan = () => {};

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-zinc-800">Request Loan</h2>
      <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4">
        <div className="grid grid-cols-[100px_1fr] items-center gap-2">
          <Label htmlFor="amount" className="font-medium">
            Loan Amount
          </Label>
          <Input
            type="number"
            id="amount"
            variant="outline"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />
        </div>
        <div className="grid grid-cols-[100px_1fr] items-center gap-2">
          <Label htmlFor="purpose" className="font-medium">
            Loan Purpose
          </Label>
          <Input
            id="purpose"
            variant="outline"
            value={purpose}
            onChange={event => setPurpose(event.target.value)}
          />
        </div>
        <Button onClick={handleRequestLoan}>Request Loan</Button>
      </div>
    </div>
  );
}

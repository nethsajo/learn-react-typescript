import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/store';
import { useState } from 'react';
import { requestLoan } from '../slice/account';

export function Loan() {
  const [amount, setAmount] = useState(0);
  const [purpose, setPurpose] = useState('');
  const dispatch = useAppDispatch();

  const handleRequestLoan = () => {
    if (!amount) return;
    dispatch(requestLoan(amount, purpose));
    // dispatch(requestLoan({amount, purpose}));
    setAmount(0);
    setPurpose('');
  };

  return (
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
  );
}

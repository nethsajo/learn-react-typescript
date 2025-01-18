import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/store';
import { useState } from 'react';
import { withdraw } from '../slice/account';

export function Withdraw() {
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();

  const handleWithdraw = () => {
    if (!amount) return;
    dispatch(withdraw(amount));
    setAmount(0);
  };

  return (
    <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4">
      <div className="grid grid-cols-[70px_1fr] items-center gap-2">
        <Label htmlFor="withdraw" className="font-medium">
          Withdraw
        </Label>
        <Input
          type="number"
          id="withdraw"
          variant="outline"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
      </div>
      <Button onClick={handleWithdraw}>Withdraw {amount > 0 ? amount : null}</Button>
    </div>
  );
}

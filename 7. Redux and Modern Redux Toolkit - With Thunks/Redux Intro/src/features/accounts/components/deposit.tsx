import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { useAppDispatch, useAppSelector } from '@/store';
import { useState } from 'react';
import { deposit } from '../slice/account';

export function Deposit() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const isLoading = useAppSelector(state => state.account.isLoading);

  const dispatch = useAppDispatch();

  const handleDeposit = () => {
    if (!deposit) return;
    dispatch(deposit({ amount, currency }));
    setAmount(0);
    setCurrency('');
  };

  return (
    <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4">
      <div className="grid grid-cols-[70px_1fr] items-center gap-2">
        <Label htmlFor="deposit" className="font-medium">
          Deposit
        </Label>
        <Input
          type="number"
          id="deposit"
          min={1}
          variant="outline"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
      </div>
      <div className="grid grid-cols-[70px_1fr] items-center gap-2">
        <Label htmlFor="currency" className="font-medium">
          Currency
        </Label>
        <Select
          id="currency"
          variant="outline"
          value={currency}
          onChange={e => setCurrency(e.target.value)}
        >
          <option value="" disabled selected>
            Select currency
          </option>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </Select>
      </div>
      <Button onClick={handleDeposit} disabled={isLoading}>
        {isLoading ? 'Converting...' : `Deposit ${amount > 0 ? amount : ''}`}
      </Button>
    </div>
  );
}

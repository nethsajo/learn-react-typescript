import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { useState } from 'react';

export function Deposit() {
  const [deposit, setDeposit] = useState(0);
  const [currency, setCurrency] = useState('USD');

  const handleDeposit = () => {};

  return (
    <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4">
      <div className="grid grid-cols-[70px_1fr] items-center gap-2">
        <Label htmlFor="deposit" className="font-medium">
          Deposit
        </Label>
        <Input
          type="number"
          id="deposit"
          variant="outline"
          value={deposit}
          onChange={event => setDeposit(Number(event.target.value))}
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
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </Select>
      </div>
      <Button onClick={handleDeposit}>Deposit</Button>
    </div>
  );
}

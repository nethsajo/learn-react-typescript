import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function Withdraw() {
  const [withdraw, setWithdraw] = useState(0);

  const handleWithdraw = () => {};

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-zinc-800">Withdraw</h2>
      <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4">
        <div className="grid grid-cols-[70px_1fr] items-center gap-2">
          <Label htmlFor="withdraw" className="font-medium">
            Withdraw
          </Label>
          <Input
            type="number"
            id="withdraw"
            variant="outline"
            value={withdraw}
            onChange={event => setWithdraw(Number(event.target.value))}
          />
        </div>
        <Button onClick={handleWithdraw}>Withdraw</Button>
      </div>
    </div>
  );
}

import { CircleDollarSign, Pencil } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Button } from 'shared/components/elements/button';
import Dialog from 'shared/components/elements/dialog';
import { Input } from 'shared/components/elements/input';
import { formatNumber } from 'shared/utils/commons';

import { Card } from './Card';

type Props = {
  budget: number;
  onSetBudget: (amount: number) => void;
};

export function Budget({ budget, onSetBudget }: Props) {
  const [amount, setAmount] = useState(budget);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!amount) return;

    onSetBudget(amount);
  };

  return (
    <Card>
      <div className="flex items-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500">
          <CircleDollarSign className="h-6 w-6 stroke-current" />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <h2 className="text-xl font-semibold tracking-tight text-slate-600">
            &#8369; {formatNumber(budget)}
          </h2>
          <span className="text-sm font-medium text-slate-400">Budget</span>
        </div>
        <div className="inline-flex items-center justify-center self-stretch sm:mx-4">
          <Dialog open={open} onOpen={handleOpen} onClose={handleClose}>
            <Dialog.Trigger>
              <Button color="none">
                <Pencil className="h-6 w-6 stroke-slate-500 transition-colors hover:stroke-slate-600" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <form onSubmit={handleSubmit}>
                <Dialog.Header>
                  <Dialog.Title>Edit budget</Dialog.Title>
                  <Dialog.Description>
                    Customize your budget effortlessly. Click update to ensure your financial plan
                    is perfectly tailored to your needs
                  </Dialog.Description>
                </Dialog.Header>
                <div className="py-6">
                  <Input
                    id="budget"
                    label="Enter your budget"
                    value={amount}
                    onChange={handleAmount}
                    className="rounded-md py-2"
                  />
                </div>
                <Dialog.Footer>
                  <Button type="submit" size="lg">
                    Update changes
                  </Button>
                </Dialog.Footer>
              </form>
            </Dialog.Content>
          </Dialog>
        </div>
      </div>
    </Card>
  );
}

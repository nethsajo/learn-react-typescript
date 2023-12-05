import { CircleDollarSign, Pencil } from 'lucide-react';
import { type ChangeEvent } from 'react';
import { Button } from 'shared/components/elements/button';
import Dialog from 'shared/components/elements/dialog';
import { Input } from 'shared/components/elements/input';

import { Card } from './Card';

type Props = {
  budget: number;
  onSetBudget: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Budget({ budget, onSetBudget }: Props) {
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  return (
    <Card className="bg-blue-500">
      <div className="flex items-center space-x-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500">
          <CircleDollarSign className="h-6 w-6 stroke-current" />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-xl font-semibold tracking-tight text-blue-50">&#8369; {budget}</h2>
          <span className="text-sm font-medium text-slate-100">Budget</span>
        </div>
        <Dialog>
          <Dialog.Trigger opens="budget-form">
            <button
              type="button"
              aria-haspopup="dialog"
              className="inline-flex h-10 w-10 items-center justify-center text-blue-50 outline-none"
            >
              <Pencil className="h-6 w-6 stroke-current" />
            </button>
          </Dialog.Trigger>
          <Dialog.Content name="budget-form">
            <Dialog.Header>
              <Dialog.Title>Edit budget</Dialog.Title>
              <Dialog.Description>
                Customize your budget effortlessly. Click update to ensure your financial plan is
                perfectly tailored to your needs
              </Dialog.Description>
            </Dialog.Header>
            <div className="py-4">
              <Input id="budget" label="Enter your budget" value={budget} onChange={onSetBudget} />
            </div>
            <Dialog.Footer>
              <Button color="none">Cancel</Button>
              <Button type="submit" size="lg">
                Update changes
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </div>
    </Card>
  );
}

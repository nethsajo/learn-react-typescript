import { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from 'shared/components/elements/button';
import { Input } from 'shared/components/elements/input';
import { Select } from 'shared/components/elements/select';

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };

  const handleOwnTip = (e: ChangeEvent<HTMLSelectElement>) => {
    setTip(Number(e.target.value));
  };

  const handleFriendTip = (e: ChangeEvent<HTMLSelectElement>) => {
    setFriendTip(Number(e.target.value));
  };

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  };

  const input = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center px-4 sm:px-6">
      <div className="mx-auto w-full max-w-none rounded-md bg-white p-4 shadow-md sm:max-w-xl sm:p-6">
        <h1 className="text-center text-xl font-extrabold text-teal-600 sm:text-2xl">
          Tip Calculator
        </h1>
        <div className="mt-6 space-y-4">
          <Input
            ref={input}
            id="bill"
            label="How much was the bill?"
            value={bill}
            onChange={handleBill}
          />
          <Select
            id="tip"
            label="How did you like the service?"
            value={tip}
            onChange={handleOwnTip}
          />
          <Select
            id="friend-tip"
            label="How did your friend like the service?"
            value={friendTip}
            onChange={handleFriendTip}
          />
          <Button color="success" size="xl" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

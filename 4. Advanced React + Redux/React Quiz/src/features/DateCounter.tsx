import { useState, type ChangeEvent } from 'react';

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStep = (e: ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };

  const handleIncrementCount = () => {
    setCount(prevCount => prevCount + step);
  };
  const handleDecrementCount = () => {
    setCount(prevCount => prevCount - step);
  };

  const classes =
    'flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold text-white';

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-lg rounded-md border-2 border-gray-200 bg-white p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <input type="range" value={step} onChange={handleStep} min={0} max={10} />
            <span>{step}</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button onClick={handleDecrementCount} className={classes}>
              -
            </button>
            <input type="text" value={count} />
            <button onClick={handleIncrementCount} className={classes}>
              +
            </button>
          </div>
          <p className="text-center font-medium text-gray-500">
            {count === 0
              ? 'Today is '
              : `${count} ${count > 1 ? 'days' : 'day'} ${
                  count >= 1 ? 'from today is ' : 'ago was '
                }`}
            {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

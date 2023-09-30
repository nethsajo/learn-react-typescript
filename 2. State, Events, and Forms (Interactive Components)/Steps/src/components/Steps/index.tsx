import { useState } from 'react';

import { Step } from './components/Step';
import { StepButton } from './components/StepButton';
import { StepMessage } from './components/StepMessage';

export default function Steps() {
  const messages = [
    'Learn React + Typescript ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];

  const [step, setStep] = useState(1);

  const handlePrevious = () => setStep(current => current - 1);
  const handleNext = () => setStep(current => current + 1);

  return (
    <div className="rounded-md border-2 border-gray-200 bg-white p-4 sm:p-8">
      <div className="mx-auto flex max-w-md flex-col justify-between gap-8">
        <div className="flex items-center justify-between">
          <Step step={step} indicator={1}>
            1
          </Step>
          <Step step={step} indicator={2}>
            2
          </Step>
          <Step step={step} indicator={3}>
            3
          </Step>
        </div>
        <StepMessage step={step}>{messages[step - 1]}</StepMessage>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <StepButton onClick={handlePrevious} disabled={step <= 1}>
            Previous
          </StepButton>
          <StepButton onClick={handleNext} disabled={step === 3}>
            Next
          </StepButton>
        </div>
      </div>
    </div>
  );
}

import type React from 'react';

type Props = {
  step: number;
  children: React.ReactNode;
};

export function StepMessage({ step, children }: Props) {
  return (
    <p className="text-center font-bold text-gray-500">
      Step {step}: {children}
    </p>
  );
}

import type React from 'react';

type Props = {
  children: React.ReactNode;
  step: number;
  indicator: number;
};

export function Step({ step, children, indicator }: Props) {
  const active = (current: number) =>
    step >= current ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-slate-500';

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${active(
        indicator
      )}`}
    >
      {children}
    </div>
  );
}

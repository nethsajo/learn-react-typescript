import type React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};

export function StepButton({ children, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-full bg-cyan-500 px-4 py-1 font-medium text-cyan-50 transition duration-300 ease-linear hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
    >
      {children}
    </button>
  );
}

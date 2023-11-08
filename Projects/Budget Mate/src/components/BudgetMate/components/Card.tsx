import type React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function Card({ className = '', children }: React.PropsWithChildren<Props>) {
  return (
    <div className={twMerge('rounded-md bg-white p-4 shadow-sm sm:p-6', className)}>{children}</div>
  );
}

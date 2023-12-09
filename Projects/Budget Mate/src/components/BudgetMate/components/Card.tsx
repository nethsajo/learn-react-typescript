import type React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function Card({ className = '', children }: React.PropsWithChildren<Props>) {
  return <div className={twMerge('last:border-r-0 sm:border-r', className)}>{children}</div>;
}

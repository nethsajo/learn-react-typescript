import type React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-[450px] overflow-hidden rounded-md border-2 border-amber-500 bg-amber-100">
        {children}
      </div>
    </div>
  );
}

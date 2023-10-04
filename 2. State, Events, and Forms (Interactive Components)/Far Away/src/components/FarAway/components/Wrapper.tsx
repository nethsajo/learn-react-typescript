import type React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
};

export function Wrapper({ children, classes }: Props) {
  return (
    <div className={`w-full px-4 ${classes}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}

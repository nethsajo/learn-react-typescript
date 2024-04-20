import type React from 'react';

type Props = {
  info: string;
};

export function MovieInfo({ info, children }: React.PropsWithChildren<Props>) {
  return (
    <div className="flex items-center space-x-1.5 text-sm">
      {children}
      <span>{info}</span>
    </div>
  );
}

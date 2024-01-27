import React from 'react';

export function RootLayout({ children }: React.PropsWithChildren) {
  return <div className="relative h-full">{children}</div>;
}

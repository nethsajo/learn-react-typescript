import type React from 'react';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="relative h-screen overflow-hidden px-6 py-6 md:m-6 md:h-[calc(100vh-3rem)] md:rounded-sm md:px-14 md:py-7">
      {children}
    </main>
  );
}

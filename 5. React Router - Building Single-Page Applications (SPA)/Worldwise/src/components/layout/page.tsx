import type React from 'react';
import { Navbar } from '../partials/navbar';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="relative h-[calc(100vh-3rem)] overflow-hidden px-6 py-6 md:m-6 md:rounded-sm md:px-14 md:py-7">
      <div className="absolute inset-0 bg-[url('./bg.jpg')] bg-cover bg-center">
        <div className="h-full w-full bg-[rgba(36,42,46,0.8)]"></div>
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

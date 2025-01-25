import { CartOverview } from '@/features/cart/components/cart-overview';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../partials/navbar';

export function RootLayout() {
  return (
    <div className="relative h-full">
      <Navbar />
      <main className="mx-auto max-w-5xl">
        <h1>Content</h1>
        {/*To render the content of a nested route inside another route */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

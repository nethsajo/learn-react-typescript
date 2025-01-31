import { CartOverview } from '@/features/cart/_components/cart-overview';
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../partials/navbar';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="relative h-full">
      {isLoading && <div className="absolute inset-0 z-20 bg-black/50">Loading...</div>}
      <Navbar />
      <main className="container mx-auto min-h-dvh px-4 pt-20 sm:px-6">
        {/*To render the content of a nested route inside another route */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

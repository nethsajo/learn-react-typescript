import { CartOverview } from '@/features/cart/_components/cart-overview';
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../partials/navbar';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="relative h-full">
      {isLoading && <div>Loading...</div>}
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/*To render the content of a nested route inside another route */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

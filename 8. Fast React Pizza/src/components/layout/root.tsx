import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../partials/navbar';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="relative h-full">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex h-screen items-center justify-center bg-black/40 text-lg text-white">
          Loading...
        </div>
      )}
      <Navbar />
      <main className="mx-auto min-h-dvh px-4 py-20 sm:container sm:px-6">
        {/*To render the content of a nested route inside another route */}
        <Outlet />
      </main>
      {/* <CartOverview /> */}
    </div>
  );
}

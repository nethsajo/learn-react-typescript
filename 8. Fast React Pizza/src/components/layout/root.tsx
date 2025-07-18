import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../partials/navbar';
import { Loader } from '../ui/loader';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="grid h-full grid-rows-[auto_1fr_auto]">
        {isLoading && <Loader />}
        <Navbar />
        <main className="h-full w-full">
          {/*To render the content of a nested route inside another route */}
          <Outlet />
        </main>
        {/* <CartOverview /> */}
      </div>
    </div>
  );
}

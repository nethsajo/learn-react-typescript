import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import { ErrorPage } from './components/ui/error';
import { ROUTES } from './constants/routes';
import Cart from './features/cart/_components/cart';
import Home from './features/home/_components';
import Menu, { menusDataLoader } from './features/menu/_components/menu';
import CreateOrder, { orderDataAction } from './features/order/_components/create-order';
import { OrderTrack } from './features/order/_components/order-track';
import ShowOrder, { orderDataLoader } from './features/order/_components/show-order';

export default function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: ROUTES.MENU, element: <Menu />, loader: menusDataLoader },
        { path: ROUTES.CART, element: <Cart /> },
        {
          path: `${ROUTES.ORDER}`,
          element: <CreateOrder />,
          action: orderDataAction,
        },
        {
          path: `${ROUTES.ORDER}/track`,
          element: <OrderTrack />,
        },
        {
          path: `${ROUTES.ORDER}/track/:id`,
          element: <ShowOrder />,
          loader: orderDataLoader,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

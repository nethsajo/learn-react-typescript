import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import { ErrorPage } from './components/ui/error';
import { ROUTES } from './constants/routes';
import { CreateOrder } from './features/order/components/create-order';
import { Order } from './features/order/components/order';
import IndexPage from './routes';
import CartPage from './routes/cart';
import MenuPage, { getMenusDataLoader } from './routes/menu';
import OrderPage from './routes/order';

export default function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <IndexPage /> },
        { path: ROUTES.MENU, element: <MenuPage />, loader: getMenusDataLoader },
        { path: ROUTES.CART, element: <CartPage /> },
        {
          path: ROUTES.ORDER,
          element: <OrderPage />,
          children: [
            { index: true, element: <CreateOrder /> },
            { path: ':id', element: <Order /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

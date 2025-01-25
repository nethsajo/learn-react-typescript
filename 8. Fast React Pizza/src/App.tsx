import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import { ErrorPage } from './components/ui/error';
import { ROUTES } from './constants/routes';
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
        { path: ROUTES.ORDER, element: <OrderPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

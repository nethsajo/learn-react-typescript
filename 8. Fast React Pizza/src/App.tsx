import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import IndexPage from './routes';
import CartPage from './routes/cart';
import MenuPage from './routes/menu';
import OrderPage from './routes/order';

export default function App() {
  const router = createBrowserRouter([
    { path: ROUTES.HOME, element: <IndexPage /> },
    { path: ROUTES.MENU, element: <MenuPage /> },
    { path: ROUTES.CART, element: <CartPage /> },
    { path: ROUTES.ORDER, element: <OrderPage /> },
  ]);

  return <RouterProvider router={router} />;
}

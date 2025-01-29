import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div>
      <Link to={ROUTES.MENU}>Back to menu</Link>
      <h1>Your cart, %NAME%</h1>
    </div>
  );
}

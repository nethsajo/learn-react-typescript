import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export const CartOverview = () => {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={ROUTES.CART}>Open cart &rarr;</Link>
    </div>
  );
};

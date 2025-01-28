import { ROUTES } from '@/constants/routes';
import { SearchOrder } from '@/features/order/components/search-order';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header>
      <Link to={ROUTES.HOME}>Fast React Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}

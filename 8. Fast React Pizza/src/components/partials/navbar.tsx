import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Fast React Pizza Co.</Link>
        </li>
      </ul>
    </nav>
  );
}

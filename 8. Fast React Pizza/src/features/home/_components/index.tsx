import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>The best pizza. Straight out of the oven, straight to you!</h1>
      <Link to={ROUTES.MENU}>See our menu</Link>
    </div>
  );
}

import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold tracking-tighter text-zinc-800">
        Always <span className="font-extrabold text-red-500">Delicious</span> – Taste the
        <span className="font-extrabold text-red-500 underline decoration-wavy"> Difference.</span>
      </h1>
      <p className="max-w-xl text-lg text-zinc-500">
        Every bite is hot and delicious! Savor the perfect blend of crispy crust, gooey cheese, and
        mouthwatering toppings.
      </p>
      <Link to={ROUTES.MENU}>See our menu</Link>
    </div>
  );
}

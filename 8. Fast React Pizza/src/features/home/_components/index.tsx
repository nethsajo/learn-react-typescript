import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 max-w-md text-3xl font-bold tracking-tighter text-zinc-800 sm:text-4xl">
        Always <span className="font-extrabold text-red-500">Delicious</span> – Taste the
        <span className="font-extrabold text-red-500 underline decoration-wavy"> Difference.</span>
      </h1>
      <p className="max-w-xl text-lg text-zinc-500 sm:text-xl">
        Every bite is hot and delicious! Savor the perfect blend of crispy crust, gooey cheese, and
        mouthwatering toppings.
      </p>
      <Link to={ROUTES.MENU}>See our menu</Link>
    </div>
  );
}

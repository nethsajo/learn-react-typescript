import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { CreateUserForm } from '@/features/user/_components/create-user-form';
import { useSessionStore } from '@/stores/use-session-store';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const username = useSessionStore(s => s.username);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto w-full">
      <div className="relative overflow-hidden">
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="mb-8 text-center font-bold tracking-tighter text-zinc-950">
              <h1 className="mb-4 text-5xl lg:text-7xl">
                Always <span className="font-extrabold text-red-500">Delicious</span> –
              </h1>
              <h2 className="text-4xl lg:text-6xl">
                Taste the{' '}
                <span className="font-extrabold text-red-500 underline"> Difference.</span>
              </h2>
            </div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-zinc-600 lg:text-2xl">
              Every bite is hot and delicious! Savor the perfect blend of{' '}
              <span className="font-semibold text-orange-600">crispy crust</span>,{' '}
              <span className="font-semibold text-yellow-600">gooey cheese</span>, and{' '}
              <span className="font-semibold text-red-600">mouthwatering toppings</span>.
            </p>
          </div>
          {!username ? (
            <CreateUserForm />
          ) : (
            <Button className="mx-auto flex" onClick={() => navigate(ROUTES.MENU)}>
              Continue ordering, {username}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

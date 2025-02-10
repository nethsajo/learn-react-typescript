import { CreateUserForm } from '@/features/user/_components/create-user-form';

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="space-y-4">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tighter text-zinc-800 sm:text-4xl md:text-5xl">
          Always <span className="font-extrabold text-red-500">Delicious</span> – <br /> Taste the
          <span className="font-extrabold text-red-500 underline"> Difference.</span>
        </h1>
        <p className="max-w-lg text-center text-zinc-500 sm:text-lg">
          Every bite is hot and delicious! Savor the perfect blend of crispy crust, gooey cheese,
          and mouthwatering toppings.
        </p>
      </div>
      <CreateUserForm />
    </div>
  );
}

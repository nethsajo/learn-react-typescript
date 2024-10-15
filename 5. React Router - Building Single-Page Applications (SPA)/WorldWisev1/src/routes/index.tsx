import { PageLayout } from '@/components/layout/page';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <PageLayout>
      <section className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          You travel the world <br /> WorldWise keeps track of your adventures.
        </h1>
        <div className="space-y-12">
          <h2 className="text-balance text-base text-gray-400 md:text-xl">
            A world map that tracks your footsteps into every city you can think of. Never forget
            your wonderful experiences, <br /> and show your friends how you have wandered the
            world.
          </h2>
          <Link
            to={ROUTES.APP}
            className="inline-flex rounded-md bg-emerald-500 px-6 py-2 text-base font-medium uppercase text-gray-100 sm:text-lg"
          >
            Start tracking now
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

2025;

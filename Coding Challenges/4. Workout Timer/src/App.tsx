import { useEffect, useMemo, useState } from 'react';
import { Calculator } from './Calculator';
import { ToggleSound } from './ToggleSound';
import { type Workout } from './types/workout';
import { formatDate } from './utils/format-date';

export default function App() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatDate(new Date(), 'MMM DD, hh:mm:ss A'));

  const partOfDay = time.slice(-2);

  const workouts: Workout[] = useMemo(() => {
    return [
      {
        name: 'Full-body workout',
        numExercises: partOfDay === 'AM' ? 9 : 8,
      },
      {
        name: 'Arms + Legs',
        numExercises: 6,
      },
      {
        name: 'Arms only',
        numExercises: 3,
      },
      {
        name: 'Legs only',
        numExercises: 4,
      },
      {
        name: 'Core only',
        numExercises: partOfDay === 'AM' ? 5 : 4,
      },
    ];
  }, [partOfDay]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatDate(new Date(), 'MMM DD, hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex h-lvh w-full items-center justify-center">
      <div className="mx-auto max-w-xl border border-zinc-900/20 bg-white p-4 text-center shadow-sm sm:rounded-md sm:px-12 sm:py-8">
        <h1 className="mb-2 text-2xl font-bold tracking-tighter text-zinc-900 sm:text-5xl">
          Workout Timer
        </h1>
        <time className="inline-flex items-center justify-center rounded-sm bg-zinc-100 px-2 py-1.5 text-xs font-semibold uppercase text-zinc-700">
          For your workout on {time}
        </time>
        <ToggleSound allowSound={allowSound} setAllowSound={setAllowSound} />
        <Calculator workouts={workouts} allowSound={allowSound} />
      </div>
    </main>
  );
}

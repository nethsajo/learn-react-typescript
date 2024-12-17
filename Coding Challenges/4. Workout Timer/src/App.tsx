import { useEffect, useState } from 'react';
import { type Workout } from './types/workout';
import { formatDate } from './utils/format-date';

export default function App() {
  const [time, setTime] = useState(formatDate(new Date(), 'MMM DD, hh:mm:ss A'));

  const partOfDay = time.slice(-2);

  const workouts: Workout[] = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatDate(new Date(), 'MMM DD, hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex h-lvh w-full items-center justify-center">
      <div className="mx-auto max-w-xl bg-white p-4 text-center sm:rounded-md sm:px-12 sm:py-8">
        <h1 className="mb-2 text-2xl font-bold tracking-tighter sm:text-5xl">Workout Timer</h1>
        <time className="inline-flex items-center justify-center rounded-sm bg-gray-100 px-2 py-1.5 text-xs font-semibold uppercase">
          For your workout on {time}
        </time>
        <div className="mt-6 grid gap-4">
          <div className="grid grid-cols-[150px_1fr] items-center">
            <label htmlFor="workout" className="text-left">
              Type of workout
            </label>
            <select name="workout">
              {workouts.map((workout, index) => (
                <option key={index}>
                  {workout.name} ({workout.numExercises} exercises)
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-[150px_1fr] items-center">
            <label htmlFor="sets" className="text-left">
              How many sets?
            </label>
            <div className="flex items-center space-x-4">
              <input type="range" name="sets" />
              <span>3</span>
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] items-center">
            <label htmlFor="speed" className="text-left">
              How fast are you?
            </label>
            <div className="flex items-center space-x-4">
              <input type="range" name="speed" />
              <span>90 sec/exercise</span>
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] items-center">
            <label htmlFor="break" className="text-left">
              Break length
            </label>
            <div className="flex items-center space-x-4">
              <input type="range" name="break" />
              <span>5 minutes/break</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

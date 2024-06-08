import Ninja from 'shared/assets/ninja.svg?react';

export function QuizHeader() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-8">
      <Ninja className="h-14 w-14 fill-blue-400" />
      <h1 className="mt-4 text-3xl font-extrabold tracking-wide text-slate-200 sm:mt-0 sm:text-4xl md:text-5xl">
        WebDevNinja
      </h1>
    </div>
  );
}

import ReactLogo from 'shared/assets/react.svg?react';

export function QuizHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8">
      <ReactLogo className="h-14 w-14 fill-sky-500 sm:h-20 sm:w-20 md:h-28 md:w-28" />
      <h1 className="text-4xl font-extrabold uppercase tracking-wide text-slate-200 md:text-5xl">
        The React Quiz
      </h1>
    </div>
  );
}

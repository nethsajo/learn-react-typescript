import ReactLogo from 'shared/assets/react.svg?react';

export default function App() {
  return (
    <div className="mx-auto my-12 max-w-3xl px-4">
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        <ReactLogo className="h-14 w-14 fill-sky-500 sm:h-20 sm:w-20 md:h-28 md:w-28" />
        <h1 className="text-3xl font-extrabold uppercase tracking-wide text-slate-200 md:text-5xl">
          The React Quiz
        </h1>
      </div>
      <div className=""></div>
    </div>
  );
}

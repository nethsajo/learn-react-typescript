import ReactLogo from 'shared/assets/react.svg?react';

export default function App() {
  return (
    <div className="mx-auto my-12 flex max-w-lg flex-col justify-center space-y-6 px-4 md:max-w-2xl">
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        <ReactLogo className="h-14 w-14 fill-sky-500 sm:h-20 sm:w-20 md:h-28 md:w-28" />
        <h1 className="text-3xl font-extrabold uppercase tracking-wide text-slate-200 md:text-5xl">
          The React Quiz
        </h1>
      </div>
      <div className="">
        <progress className="h-4 w-full rounded-md bg-gray-200"></progress>
        <div className="flex justify-between">
          <span>
            Question <span className="font-bold">2</span> / 15
          </span>
          <span>
            <span className="font-bold">10</span> / 280 points
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <p className="text-xl font-bold text-slate-300">Which company invented React?</p>
        <div className="space-y-4">
          <button className="bg- w-full rounded-full bg-slate-800 px-6 py-4 text-left font-medium text-slate-300 transition-all duration-300 hover:translate-x-4 hover:bg-transparent hover:ring-1 hover:ring-white/10">
            Google
          </button>
          <button className="bg- w-full rounded-full bg-slate-800 px-6 py-4 text-left font-medium text-slate-300 transition-all duration-300 hover:translate-x-4 hover:bg-transparent hover:ring-1 hover:ring-white/10">
            Apple
          </button>
          <button className="bg- w-full rounded-full bg-slate-800 px-6 py-4 text-left font-medium text-slate-300 transition-all duration-300 hover:translate-x-4 hover:bg-transparent hover:ring-1 hover:ring-white/10">
            Netflix
          </button>
          <button className="bg- w-full rounded-full bg-slate-800 px-6 py-4 text-left font-medium text-slate-300 transition-all duration-300 hover:translate-x-4 hover:bg-transparent hover:ring-1 hover:ring-white/10">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

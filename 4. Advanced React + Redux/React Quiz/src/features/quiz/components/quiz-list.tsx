export function QuizList() {
  return (
    <div className="space-y-4">
      <p className="text-balance text-lg font-bold text-slate-300 sm:text-xl">
        Which company invented React?
      </p>
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
  );
}

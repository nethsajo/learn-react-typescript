import { Card } from './components/Card';

export default function BudgetMate() {
  return (
    <div className="mx-auto mt-24 max-w-none px-4 sm:px-6 md:max-w-6xl">
      <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-500 sm:text-4xl">
        Budget Mate
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

import { Star } from 'lucide-react';

type Props = {
  title: string;
  average: number;
};

export function MovieTitle({ title, average }: Props) {
  return (
    <div className="flex items-center">
      <h1 className="text-left text-3xl font-bold tracking-tight text-gray-100 md:text-6xl">
        {title}
      </h1>
      <div className="ml-auto flex items-center">
        <span className="text-xl font-semibold text-gray-200">{`${Math.round(average)}.0`}</span>
        <Star size={20} color="#facc15" className="ml-2 fill-yellow-400" />
      </div>
    </div>
  );
}

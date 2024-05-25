type Props = {
  count: number;
  maxPossiblePoints: number;
  numberOfQuestions: number;
  points: number;
};

export function QuizProgress({ count, numberOfQuestions, maxPossiblePoints, points }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-700">
        <div
          className="absolute h-full bg-blue-500 transition-all duration-300"
          style={{ width: '15%' }}
        />
      </div>
      <div className="flex justify-between">
        <span>
          Question <span className="font-bold">{count + 1}</span> / {numberOfQuestions}
        </span>
        <span>
          <span className="font-bold">{points}</span> / {maxPossiblePoints} points
        </span>
      </div>
    </div>
  );
}

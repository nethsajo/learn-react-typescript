type Props = {
  count: number;
  maxPossiblePoints: number;
  numberOfQuestions: number;
  points: number;
  answer?: number | null;
};

export function QuizProgress({
  count,
  numberOfQuestions,
  maxPossiblePoints,
  points,
  answer,
}: Props) {
  const current = count + Number(answer !== null);

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-700">
        <div
          className="absolute h-full bg-blue-500 transition-all duration-300"
          style={{
            width: `${Math.round((current / numberOfQuestions) * 100)}%`,
          }}
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

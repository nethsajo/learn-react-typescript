type Props = {
  maxPossiblePoints: number;
  numberOfQuestions: number;
};

export function QuizProgress({ numberOfQuestions, maxPossiblePoints }: Props) {
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
          Question <span className="font-bold">2</span> / {numberOfQuestions}
        </span>
        <span>
          <span className="font-bold">10</span> / {maxPossiblePoints} points
        </span>
      </div>
    </div>
  );
}

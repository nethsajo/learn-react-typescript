import { Question, useQuiz } from 'shared/contexts/quiz';

export function QuizProgress() {
  const { index: count, questions, answer, points } = useQuiz();

  const current = count + Number(answer !== null);

  const numberOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((current: number, question: Question) => {
    return current + question.points;
  }, 0);

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

import { ACTION, useQuiz } from 'shared/contexts/quiz';
import { twMerge } from 'tailwind-merge';

export function QuizQuestion() {
  const { index, questions, answer, dispatch } = useQuiz();
  const question = questions[index]!;

  const hasAnswered = answer !== null;

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold text-slate-300 sm:text-xl">
        {index + 1}. {question.question}
      </p>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={question.options.indexOf(option)}
            onClick={() => dispatch({ type: ACTION.ANSWER, payload: index })}
            disabled={hasAnswered}
            className={twMerge(
              `bg- w-full rounded-full bg-slate-800 px-6 py-4 text-left font-medium text-slate-300 transition-all duration-300 enabled:hover:translate-x-4 enabled:hover:bg-transparent enabled:hover:ring-1 enabled:hover:ring-white/10 disabled:cursor-not-allowed  ${index === answer ? 'translate-x-4' : 'translate-x-0'} ${hasAnswered ? (index === question.correctOption ? 'bg-sky-600' : 'bg-amber-600') : null}`
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

import { Dispatch } from 'react';
import { Question } from 'shared/types/question';
import { Action, Type } from 'src/App';
import { twMerge } from 'tailwind-merge';

type Props = {
  count: number;
  question: Question;
  dispatch: Dispatch<Action>;
  answer?: number | null;
};

export function QuizQuestion({ count, question, dispatch, answer }: Props) {
  const hasAnswered = answer !== null;

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold text-slate-300 sm:text-xl">
        {count + 1}. {question.question}
      </p>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={question.options.indexOf(option)}
            onClick={() => dispatch({ type: Type.NEW_ANSWER, payload: index })}
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

import { Dispatch } from 'react';
import { Action, Type } from 'src/App';

type Props = {
  index: number;
  numberOfQuestions: number;
  answer?: number | null;
  dispatch: Dispatch<Action>;
};

export function QuizNext({ index, numberOfQuestions, answer, dispatch }: Props) {
  if (answer === null) return null;

  if (index < numberOfQuestions - 1) {
    return (
      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch({ type: Type.NEXT_QUESTION })}
          className="rounded-sm bg-sky-500 px-6 py-1.5 font-medium text-slate-200 transition-colors duration-300 hover:bg-sky-600"
        >
          Next
        </button>
      </div>
    );
  }

  if (index === numberOfQuestions - 1) {
    return (
      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch({ type: Type.FINISH })}
          className="rounded-sm bg-sky-500 px-6 py-1.5 font-medium text-slate-200 transition-colors duration-300 hover:bg-sky-600"
        >
          Finish
        </button>
      </div>
    );
  }
}

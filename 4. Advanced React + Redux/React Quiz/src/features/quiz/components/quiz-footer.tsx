import { Dispatch } from 'react';
import { Action, Type } from 'src/App';

type Props = {
  answer?: number | null;
  dispatch: Dispatch<Action>;
};

export function QuizFooter({ dispatch, answer }: Props) {
  if (answer === null) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="rounded-md px-4 py-2 ring-1 ring-white/10">07:18</div>
      {answer !== null && (
        <button
          onClick={() => dispatch({ type: Type.NEXT_QUESTION })}
          className="rounded-sm bg-sky-500 px-6 py-1.5 font-medium text-slate-200 transition-colors duration-300 hover:bg-sky-600"
        >
          Next
        </button>
      )}
    </div>
  );
}

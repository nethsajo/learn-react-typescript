import { Dispatch, useEffect } from 'react';
import { formatTime } from 'shared/utils/format';
import { Action, Type } from 'src/App';

type Props = {
  remaining: number;
  dispatch: Dispatch<Action>;
};

export function QuizTimer({ remaining, dispatch }: Props) {
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: Type.TICK });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="rounded-md px-4 py-2 ring-1 ring-white/10">
      {formatTime(minutes)}:{formatTime(seconds)}
    </div>
  );
}

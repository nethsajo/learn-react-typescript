import { useEffect } from 'react';
import { ACTION, useQuiz } from 'shared/contexts/quiz';
import { formatTime } from 'shared/utils/format';

export function QuizTimer() {
  const { remaining, dispatch } = useQuiz();
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: ACTION.TICK });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="rounded-md px-4 py-2 ring-1 ring-white/10">
      {formatTime(minutes)}:{formatTime(seconds)}
    </div>
  );
}

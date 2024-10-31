import { ACTION, useQuiz } from 'shared/contexts/quiz';

export function QuizFinish() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = '🏅';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '😁';
  if (percentage >= 0 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🤦';

  return (
    <div className="text-center text-slate-300">
      <p>
        <span>{emoji}</span>You scored <strong className="text-sky-500">{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)})%
      </p>
      <p className="font-medium">High score: {highscore} points</p>
      <button
        onClick={() => dispatch({ type: ACTION.RESTART })}
        className="mt-4 rounded-sm bg-sky-500 px-6 py-1.5 font-medium text-slate-200 transition-colors duration-300 hover:bg-sky-600"
      >
        Restart
      </button>
    </div>
  );
}

type Props = {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
};

export function QuizFinish({ points, maxPossiblePoints, highscore }: Props) {
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
        You scored <strong className="text-sky-500">{points}</strong> out of {maxPossiblePoints} (
        {Math.round(percentage)})%
      </p>
      <p>High score: {highscore} points</p>
    </div>
  );
}

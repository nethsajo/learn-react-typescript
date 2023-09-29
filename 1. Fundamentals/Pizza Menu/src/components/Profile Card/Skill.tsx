type Props = {
  language: string;
  level: string;
  color: string;
};

export function Skill({ language, level, color }: Props) {
  const emoji = {
    beginner: '👶',
    intermediate: '👍',
    advanced: '💪',
  } as const;

  return (
    <div className={`rounded-full px-3 py-1 text-sm font-medium text-white ${color}`}>
      <span>{language}</span>
      <span>{emoji[level as keyof typeof emoji]}</span>
    </div>
  );
}

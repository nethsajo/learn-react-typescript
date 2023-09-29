import { type Skill as TSkill } from './Skills.types';

type Props = Omit<TSkill, 'id'>;

export function Skill({ language, level, color }: Props) {
  const emoji = {
    beginner: '👶',
    intermediate: '👍',
    advanced: '💪',
  } as const;

  return (
    <div className={`rounded-full px-3 py-1 text-sm font-medium text-white ${color}`}>
      <span>{language}</span>
      <span>{emoji[level]}</span>
    </div>
  );
}

import { Skill } from './Skill';
import { type Skill as TSkill } from './Skills.types';

type Props = {
  skills: TSkill[];
};

export function Skills({ skills }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-4 sm:p-6">
      {skills.map(skill => (
        <Skill key={skill.id} language={skill.language} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

import { Skill } from './Skill';

export function Skills() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-4 sm:p-6">
      <Skill language="HTML + CSS" color="bg-orange-500" level="advanced" />
      <Skill language="JavaScript" color="bg-yellow-500" level="intermediate" />
      <Skill language="TypeScript" color="bg-blue-500" level="beginner" />
      <Skill language="Figma" color="bg-black" level="beginner" />
      <Skill language="Git and GitHub" color="bg-slate-700" level="beginner" />
      <Skill language="React" color="bg-sky-500" level="beginner" />
      <Skill language="Vue" color="bg-emerald-500" level="beginner" />
    </div>
  );
}

import Skill from './Skill';

export default function Skills() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-4 sm:p-6">
      <Skill language="HTML + CSS" color="bg-orange-500" emoji="💪" />
      <Skill language="JavaScript" color="bg-yellow-500" emoji="👍" />
      <Skill language="TypeScript" color="bg-blue-500" emoji="👶" />
      <Skill language="Figma" color="bg-black" emoji="👍" />
      <Skill language="Git and GitHub" color="bg-slate-700" emoji="👶" />
      <Skill language="React" color="bg-sky-500" emoji="👶" />
      <Skill language="Vue" color="bg-emerald-500" emoji="👶" />
    </div>
  );
}

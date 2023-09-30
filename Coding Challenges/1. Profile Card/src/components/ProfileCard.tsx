import Header from 'components/Header';

import { About } from './About';
import { Avatar } from './Avatar';
import { Card } from './Card';
import { Skills } from './Skills';
import { type Skill } from './Skills.types';

export default function ProfileCard() {
  const skills: Skill[] = [
    {
      id: 1,
      language: 'HTML + CSS',
      level: 'advanced',
      color: 'bg-orange-500',
    },
    {
      id: 2,
      language: 'JavaScript',
      level: 'intermediate',
      color: 'bg-yellow-500',
    },
    {
      id: 3,
      language: 'TypeScript',
      level: 'beginner',
      color: 'bg-blue-500',
    },
    {
      id: 4,
      language: 'Figma',
      level: 'beginner',
      color: 'bg-black',
    },
    {
      id: 5,
      language: 'Git and GitHub',
      level: 'intermediate',
      color: 'bg-slate-700',
    },
    {
      id: 6,
      language: 'React',
      level: 'beginner',
      color: 'bg-sky-500',
    },
    {
      id: 7,
      language: 'Vue',
      level: 'beginner',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="">
      <Header title="My Profile Card" />
      <Card>
        <Avatar />
        <About />
        <Skills skills={skills} />
      </Card>
    </div>
  );
}

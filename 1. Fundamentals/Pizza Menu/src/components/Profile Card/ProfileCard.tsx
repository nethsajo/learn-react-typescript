import Header from 'components/Header';

import { About } from './About';
import { Avatar } from './Avatar';
import { Card } from './Card';
import { Skills } from './Skills';

export default function ProfileCard() {
  return (
    <div className="">
      <Header title="My Profile Card" />
      <Card>
        <Avatar />
        <About />
        <Skills />
      </Card>
    </div>
  );
}

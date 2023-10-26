import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddUserSvg from 'shared/assets/svg/add-user.svg?react';
import { Button } from 'shared/components/elements/button';

import { Dialog } from './components/Dialog';
import { Form } from './components/Form';
import { List } from './components/List';
import { type Friend } from './types';

export default function EatNSplit() {
  const [isToggle, setIsToggle] = useState(false);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selected, setSelected] = useState<Friend | null>(null);

  const handleToggleForm = () => {
    setIsToggle(toggle => !toggle);
  };

  const onAddFriend = (friend: Friend) => {
    setFriends(currentFriends => [...currentFriends, friend]);
    onCloseForm();
  };

  const onSelectFriend = (friend: Friend) => {
    setSelected(current => (current?.id === friend.id ? null : friend));
  };

  const onCloseForm = () => {
    setIsToggle(false);
  };

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="mx-auto mt-12 max-w-xl rounded-md bg-white shadow-sm">
        <header className="mx-4 flex items-center justify-between border-b pb-4 pt-6">
          <h1 className="text-base font-bold tracking-tight text-slate-600 sm:text-2xl">
            Eat &apos;N Split
          </h1>
          <Button size="sm" color={isToggle ? 'danger' : 'primary'} onClick={handleToggleForm}>
            {!isToggle && (
              <AddUserSvg className="h-5 w-5 fill-transparent stroke-current stroke-2" />
            )}
            <span>{!isToggle ? 'Add friend' : 'Close'}</span>
          </Button>
        </header>
        <div className="p-4">
          {isToggle && <Form onAddFriend={onAddFriend} onCloseForm={onCloseForm} />}
          {friends.length > 0 ? (
            <List friends={friends} onSelectFriend={onSelectFriend} />
          ) : (
            <span className="block text-center text-sm font-medium tracking-tight text-gray-400">
              Start adding your friends and split the bill!
            </span>
          )}
          {selected && createPortal(<Dialog friend={selected} />, document.body)}
        </div>
      </div>
    </div>
  );
}

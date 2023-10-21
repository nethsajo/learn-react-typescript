import { useState } from 'react';
import { Button } from 'shared/components/elements/button';

import { Form } from './components/Form';
import { List } from './components/List';
import { type Friend } from './types';

export default function EatNSplit() {
  const [isToggle, setIsToggle] = useState(false);
  const [friends, setFriends] = useState<Friend[]>([]);

  const handleToggleForm = () => {
    setIsToggle(toggle => !toggle);
  };

  const onAddFriend = (friend: Friend) => {
    setFriends(currentFriends => [...currentFriends, friend]);
    onCloseForm();
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
          <Button size="sm" onClick={handleToggleForm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 fill-transparent stroke-current stroke-2"
            >
              <path d="M14 19a6 6 0 0 0-12 0" />
              <circle cx="8" cy="9" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
            <span>Add friend</span>
          </Button>
        </header>
        <div className="p-4">
          {isToggle && <Form onAddFriend={onAddFriend} onCloseForm={onCloseForm} />}
          {friends.length > 0 ? (
            <List friends={friends} />
          ) : (
            <span className="block text-center text-sm font-medium tracking-tight text-gray-400">
              Start adding your friends and split the bill!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

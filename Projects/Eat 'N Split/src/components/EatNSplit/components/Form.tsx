import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react';
import { Button } from 'shared/components/elements/button';
import { Input } from 'shared/components/elements/input';

import { type Friend } from '../types';

type Props = {
  onAddFriend: (friend: Friend) => void;
  onCloseForm: () => void;
};

export function Form({ onAddFriend, onCloseForm }: Props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const friend = useRef<HTMLInputElement | null>(null);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return;

    onAddFriend({
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    });
  };

  useEffect(() => {
    if (friend.current) friend.current.focus();
  }, []);

  return (
    <div className="mb-4 w-full rounded-md bg-gray-100 p-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 space-y-3">
          <Input
            ref={friend}
            id="friend"
            label="Your friend's name"
            value={name}
            onChange={handleName}
          />
          <Input id="image" label="Image" value={image} onChange={handleImage} />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Button color="none" variant="text" size="xs" onClick={onCloseForm}>
            Cancel
          </Button>
          <Button type="submit" size="xs">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

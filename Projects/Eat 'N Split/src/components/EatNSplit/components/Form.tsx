import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react';
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
    <div className="mb-4 w-full rounded-sm bg-gray-100 p-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 space-y-3">
          <Input label="Your friend's name" value={name} onChange={handleName} />
          <Input label="Image" value={image} onChange={handleImage} />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="text-xs font-semibold text-gray-500"
            onClick={onCloseForm}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-sm bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white sm:px-4 sm:py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

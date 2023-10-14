import { type ChangeEvent, type FormEvent, useState } from 'react';

import { type Friend } from '../types';

type Props = {
  onAddFriend: (friend: Friend) => void;
};

export function Form({ onAddFriend }: Props) {
  const [friend, setFriend] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleFriend = (e: ChangeEvent<HTMLInputElement>) => {
    setFriend(e.target.value);
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddFriend({
      id: crypto.randomUUID(),
      name: friend,
      image,
      balance: 0,
    });
  };

  return (
    <div className="w-full rounded-sm bg-gray-100 p-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 space-y-3">
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-medium tracking-tight text-gray-500" htmlFor="friend">
              Your friend&apos;s name
            </label>
            <input
              type="text"
              id="friend"
              value={friend}
              onChange={handleFriend}
              className="rounded-sm border-none px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-medium tracking-tight text-gray-500" htmlFor="friend">
              Image
            </label>
            <input
              type="text"
              id="friend"
              value={image}
              onChange={handleImage}
              className="rounded-sm border-none px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <button type="button" className="text-xs font-semibold text-gray-500">
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

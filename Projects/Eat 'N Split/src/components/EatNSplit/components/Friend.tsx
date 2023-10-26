import { Button } from 'shared/components/elements/button';

import { type Friend as FriendType } from '../types';

type Props = {
  friend: FriendType;
  onSelectFriend: (friend: FriendType) => void;
  selected: FriendType | null;
};

export function Friend({ friend, onSelectFriend, selected }: Props) {
  const isSelected = selected?.id === friend.id;

  return (
    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <div className="grid grid-cols-[44px_1fr] items-center gap-x-2">
        <img
          src={friend.image}
          alt={`Photo of ${friend.name}`}
          className="row-span-2 rounded-full"
        />
        <p className="col-start-2 row-start-1 font-bold leading-none text-slate-700">
          {friend.name}
        </p>
        <span className="col-start-2 row-start-2 text-xs text-slate-400">
          You and {friend.name} are even
        </span>
      </div>
      <Button
        color={isSelected ? 'danger' : 'secondary'}
        size="xs"
        onClick={() => onSelectFriend(friend)}
      >
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </div>
  );
}

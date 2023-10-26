import { type Friend as FriendType } from '../types';
import { Friend } from './Friend';

type Props = {
  friends: FriendType[];
  onSelectFriend: (friend: FriendType) => void;
};

export function List({ friends, onSelectFriend }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-semibold text-slate-400">
        Your {friends.length > 1 ? 'friends' : 'friend'}
      </h3>
      <div className="flex flex-col space-y-4">
        {friends.map(friend => {
          return <Friend key={friend.id} friend={friend} onSelectFriend={onSelectFriend} />;
        })}
      </div>
    </div>
  );
}

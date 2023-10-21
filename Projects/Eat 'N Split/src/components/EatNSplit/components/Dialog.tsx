import { type Friend } from '../types';

type Props = {
  friend: Friend;
};

export function Dialog({ friend }: Props) {
  return <pre className="text-sm">{JSON.stringify(friend)}</pre>;
}

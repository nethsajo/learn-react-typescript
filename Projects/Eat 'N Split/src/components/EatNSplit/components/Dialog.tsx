import { type Friend } from '../types';

type Props = {
  friend: Friend;
};

export function Dialog({ friend }: Props) {
  const state = friend ? 'open' : 'closed';

  return (
    <div
      data-state={state}
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm"
      data-aria-hidden="true"
      aria-hidden="true"
    >
      <div
        role="dialog"
        data-state={state}
        className="fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 rounded-lg border bg-white p-6 shadow-lg duration-200 sm:max-w-[425px]"
      >
        <div className="">
          <h1>Split a bill with {friend.name}</h1>
        </div>
      </div>
    </div>
  );
}

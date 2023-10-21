import { type ChangeEvent } from 'react';

export type InputProps = {
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-medium tracking-tight text-gray-500" htmlFor="friend">
        {label}
      </label>
      <input
        type="text"
        id="friend"
        value={value}
        onChange={onChange}
        className="rounded-sm border-0 px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2"
      />
    </div>
  );
}

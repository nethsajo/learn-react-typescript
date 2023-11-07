import type React from 'react';
import { type ChangeEvent } from 'react';

export type SelectProps = {
  id: string;
  label?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({
  id,
  children,
  label,
  value,
  onChange,
}: React.PropsWithChildren<SelectProps>) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm font-medium tracking-tight text-gray-500">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="rounded-sm border-0 bg-gray-100 px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2 focus:ring-blue-600"
      >
        {children}
      </select>
    </div>
  );
}

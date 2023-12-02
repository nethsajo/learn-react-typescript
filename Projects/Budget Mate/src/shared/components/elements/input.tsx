import React, { type ChangeEvent, type Ref } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = {
  id: string;
  label: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  [rest: string]: unknown;
};

export const Input = React.forwardRef(
  ({ id, label, value, onChange, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="text-sm font-medium tracking-tight text-gray-500">
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          className="rounded-sm border-0 bg-gray-100 px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100"
        />
      </div>
    );
  }
);

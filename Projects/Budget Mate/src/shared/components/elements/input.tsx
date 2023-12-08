import React, { type ChangeEvent, type Ref } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = {
  id: string;
  type: string;
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  [rest: string]: unknown;
};

export const Input = React.forwardRef(
  (
    { type, id, label, value, onChange, className, ...rest }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="text-sm font-medium tracking-tight text-gray-500">
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          type={type || 'text'}
          id={id}
          value={value}
          onChange={onChange}
          className={twMerge(
            'rounded-sm border-0 bg-gray-100 px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100',
            className
          )}
        />
      </div>
    );
  }
);

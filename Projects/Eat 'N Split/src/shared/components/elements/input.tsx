import React, { type ChangeEvent, type Ref } from 'react';

export type InputProps = {
  id: string;
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = React.forwardRef(
  ({ id, label, value, onChange }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-medium tracking-tight text-gray-500" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          className="rounded-sm border-0 px-3 py-1 text-sm text-gray-500 transition duration-300 focus:outline-none focus:outline-offset-2 focus:ring-2"
        />
      </div>
    );
  }
);

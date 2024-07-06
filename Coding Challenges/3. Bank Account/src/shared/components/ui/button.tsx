import type React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
  dispatch: () => void;
};

export const Button = ({ children, disabled, dispatch }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="rounded-sm bg-blue-500 px-3 py-1 text-sm font-medium disabled:cursor-not-allowed disabled:bg-blue-400 disabled:text-blue-100"
      onClick={dispatch}
    >
      {children}
    </button>
  );
};

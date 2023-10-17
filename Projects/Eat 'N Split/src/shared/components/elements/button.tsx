import type React from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  variant?: 'text' | 'outlined' | 'contained';
  onClick: () => void;
};

export function Button({
  type = 'button',
  size = 'md',
  variant = 'text',
  color = 'primary',
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

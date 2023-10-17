import type React from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  const sizes = {
    xs: 'px-2 py-1',
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-5 py-4',
    xl: 'px-6 py-5',
  };

  const colors = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-100',
    success: 'bg-teal-500',
    danger: 'bg-red-500',
  };

  const classes = `${sizes[size]} ${colors[color]}`;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

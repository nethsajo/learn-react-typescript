import type React from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'none';
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
};

export function Button({
  type = 'button',
  size = 'md',
  variant = 'contained',
  color = 'primary',
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
  const sizes = {
    xs: 'px-2 py-1 text-xs rounded',
    sm: 'px-2 py-1 text-sm rounded',
    md: 'px-2.5 py-1.5 text-sm rounded-md',
    lg: 'px-3 py-2 text-sm rounded-md',
    xl: 'px-3.5 py-2.5 text-sm rounded-md',
  };

  const colors = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-500 hover:bg-gray-200 active:bg-gray-300',
    success: 'bg-teal-500 hover:bg-teal-600 text-white',
    danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    none: 'text-gray-400 hover:text-gray-500',
  };

  const variants = {
    text: 'bg-transparent',
    contained: 'border-0',
    outlined: 'bg-transparent border-1 border-primary-500',
  };

  const classNames = `inline-flex items-center justify-center sm:justify-start space-x-2 outline-none font-semibold transition-colors duration-300 ${sizes[size]} ${colors[color]} ${variants[variant]}`;

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

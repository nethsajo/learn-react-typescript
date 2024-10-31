import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700',
        destructive: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
        outline: 'border border-gray-500 hover:bg-gray-500 hover:text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 hover:text-gray-700',
        ghost: 'hover:bg-gray-500/70 hover:text-white',
        link: 'text-white hover:underline underline-offset-4',
      },
      size: {
        sm: 'px-2 py-1 h-8',
        lg: 'px-3 py-2 h-9',
        xl: 'px-3.5 py-2.5 h-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

const Button = ({ className, variant, size, children, type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} {...props} className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };

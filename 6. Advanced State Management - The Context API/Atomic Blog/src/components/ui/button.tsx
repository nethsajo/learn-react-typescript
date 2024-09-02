import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700',
        destructive: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
        outline: 'border border-gray-500 hover:bg-gray-500 hover:text-white',
        secondary: 'bg-gray-500 hover:bg-gray-500/70 hover:text-white',
        ghost: 'hover:bg-gray-500/70 hover:text-white',
        link: 'text-white hover:underline underline-offset-4',
      },
      size: {
        default: 'px-2 py-1',
        sm: 'px-2 py-1',
        md: 'px-2.5 py-1.5',
        lg: 'px-3 py-2',
        xl: 'px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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

import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const inputVariants = cva(
  'block w-full rounded-md px-3 py-2 shadow-sm read-only:focus:ring-0 read-only:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-white read-only:bg-gray-300',
        outline: 'border border-zinc-400/60 bg-transparent text-gray-800 placeholder:text-gray-500',
      },
      scale: {
        sm: 'h-8',
        lg: 'h-9',
        xl: 'h-11',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
);

const Input = ({ type = 'text', className, scale, variant, ...props }: InputProps) => {
  return (
    <input type={type} {...props} className={cn(inputVariants({ variant, scale, className }))} />
  );
};

export { Input };

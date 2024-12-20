import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva(
  'block w-full rounded-md px-3 py-2 shadow-sm read-only:focus:ring-0 read-only:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-white read-only:bg-gray-300',
        outline: 'border border-zinc-900/20 bg-transparent text-gray-800 placeholder:text-gray-500',
      },
      scale: {
        sm: 'h-8',
        lg: 'h-9',
        xl: 'h-11',
      },
    },
    defaultVariants: {
      variant: 'filled',
      scale: 'lg',
    },
  }
);

const Select = ({ className, scale, variant, children, ...props }: InputProps) => {
  return (
    <select className={cn(inputVariants({ variant, scale, className }))} {...props}>
      {children}
    </select>
  );
};

export { Select };

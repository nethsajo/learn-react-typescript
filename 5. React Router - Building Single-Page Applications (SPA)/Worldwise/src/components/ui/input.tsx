import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const inputVariants = cva(
  'block w-full rounded-md px-3 py-2 shadow-sm read-only:focus-visible:ring-0 read-only:focus-visible:ring-transparent sm:text-sm sm:leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-600 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-gray-200 read-only:bg-gray-300',
        outline: 'border border-zinc-400/60 bg-transparent text-gray-200 dark:[color-scheme:dark]',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
);

const Input = ({ type = 'text', className, variant, ...props }: InputProps) => {
  return <input type={type} {...props} className={cn(inputVariants({ variant, className }))} />;
};

export { Input };

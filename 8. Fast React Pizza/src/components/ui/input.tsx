import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const inputVariants = cva(
  'block w-full rounded-md px-3 py-2 shadow-sm sm:text-sm sm:leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900 placeholder:text-zinc-500 read-only:focus-visible:ring-0',
  {
    variants: {
      variant: {
        filled: 'bg-zinc-100 read-only:!bg-zinc-200',
        outline: 'border border-zinc-200 bg-transparent',
      },
      scale: {
        sm: 'h-9',
        md: 'h-12',
        lg: 'h-14',
      },
    },
    defaultVariants: {
      scale: 'sm',
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

import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  children: React.ReactNode;
}

const inputVariants = cva('block w-full', {
  variants: {
    variant: {
      filled: '',
      outline: '',
      underlined: '',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
});

const Input = ({ className, variant, type = 'text', ...props }: InputProps) => {
  return <input type={type} {...props} className={cn(inputVariants({ variant, className }))} />;
};

export { Input };

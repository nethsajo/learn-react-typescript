import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
}

const textareaVariants = cva(
  'block w-full rounded-md resize-none px-3 py-2 shadow-sm read-only:focus:ring-0 read-only:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-gray-200 read-only:bg-gray-300 ring-gray-400',
        outline: 'border border-zinc-400/60 bg-transparent text-gray-800 placeholder:text-gray-500',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
);

export const Textarea = ({ rows = 5, className, variant, ...props }: TextareaProps) => {
  return (
    <textarea rows={rows} {...props} className={cn(textareaVariants({ variant, className }))} />
  );
};

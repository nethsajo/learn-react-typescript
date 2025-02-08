import { cn } from '@/utils/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(
  'inline-flex gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-current items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-white hover:bg-zinc-900/90',
        destructive: 'bg-red-500 text-white hover:bg-red-500 hover:opacity-90',
        outline: 'border border-zinc-200 hover:bg-zinc-100 text-zinc-900',
        secondary: 'bg-zinc-100 hover:bg-zinc-100/80 text-zinc-900',
        ghost: 'hover:bg-zinc-100 text-zinc-900',
        link: 'text-zinc-900 hover:underline underline-offset-4',
      },
      size: {
        sm: 'h-9 px-4 py-2',
        md: 'h-12 px-4 py-2',
        lg: 'h-14 px-6 py-3',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

const Button = ({ type = 'button', className, variant, size, children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props} className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };

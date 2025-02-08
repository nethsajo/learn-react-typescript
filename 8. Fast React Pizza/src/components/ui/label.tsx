import { cn } from '@/utils/classnames';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label {...props} className={cn(className, 'font-medium')}>
      {children}
    </label>
  );
};

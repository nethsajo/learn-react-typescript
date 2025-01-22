import { cn } from '@/utils/classnames';

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Slider = ({ className, ...props }: SliderProps) => {
  return <input type="range" className={cn(`accent-gray-700 ${className}`)} {...props} />;
};

export { Slider };

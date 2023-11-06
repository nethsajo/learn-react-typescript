import { Select } from 'shared/components/elements/select';

type Props = {
  id: string | number;
  label: string;
  percentage: number;
  onHandleTip: () => void;
};

export function Percentage({ percentage, onHandleTip }: Props) {
  return (
    <Select
      id="tip"
      label="How did you like the service?"
      value={percentage}
      onChange={onHandleTip}
    >
      <option value={0}>Dissatisfied ({0}%)</option>
      <option value={0.05}>It was okay ({0.05 * 100}%)</option>
      <option value={0.1}>It was good ({0.1 * 100}%)</option>
      <option value={0.2}>Absolutely amazing! ({0.2 * 100}%)</option>
    </Select>
  );
}

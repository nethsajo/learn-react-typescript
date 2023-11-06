import { type ChangeEvent } from 'react';
import { Select } from 'shared/components/elements/select';

type Props = {
  id: string;
  label: string;
  percentage: number;
  onHandleTip: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Percentage({ id, label, percentage, onHandleTip }: Props) {
  return (
    <Select id={id} label={label} value={percentage} onChange={onHandleTip}>
      <option value={0}>Dissatisfied ({0}%)</option>
      <option value={0.05}>It was okay ({0.05 * 100}%)</option>
      <option value={0.1}>It was good ({0.1 * 100}%)</option>
      <option value={0.2}>Absolutely amazing! ({0.2 * 100}%)</option>
    </Select>
  );
}

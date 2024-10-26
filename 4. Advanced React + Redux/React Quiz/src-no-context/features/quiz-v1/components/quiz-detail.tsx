type Props = {
  label: string;
  text: string | number;
};

export function QuizDetail({ label, text }: Props) {
  return (
    <div className="grid grid-cols-[150px_100px] justify-center gap-2">
      <span className="text-right font-medium text-slate-400">{label}:</span>
      <span className="text-left font-semibold uppercase text-slate-300">{text}</span>
    </div>
  );
}

import { Question } from 'shared/types/question';

type Props = {
  question: Question;
};

export function QuizQuestion({ question }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-balance text-lg font-bold text-slate-300 sm:text-xl">
        {question.question}
      </p>
      <div className="space-y-4">
        {question.options.map(option => (
          <button
            key={question.options.indexOf(option)}
            className="bg- w-full rounded-full bg-slate-800 px-6 py-4 text-left font-medium text-slate-300 transition-all duration-300 hover:translate-x-4 hover:bg-transparent hover:ring-1 hover:ring-white/10"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

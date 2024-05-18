type Props = {
  numberOfQuestions: number;
};

export function QuizStart({ numberOfQuestions }: Props) {
  return (
    <div className="text-center">
      <h2 className="mb-2 text-2xl font-medium sm:text-2xl md:text-3xl">
        Welcome to the React Quiz
      </h2>
      <p className="mb-8 text-sm text-slate-400">
        {numberOfQuestions} questions to test your React mastery
      </p>
      <button className="rounded-sm bg-sky-500 px-6 py-2 text-sm font-semibold text-sky-100 transition-colors duration-300 hover:bg-sky-600">
        Let's Start
      </button>
    </div>
  );
}

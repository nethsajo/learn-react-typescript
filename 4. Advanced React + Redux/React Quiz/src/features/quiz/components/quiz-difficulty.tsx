import { LEVELS, useQuiz } from 'shared/contexts/quiz';

export function QuizDifficulty() {
  const {
    difficulty,
    totalQuestions,
    takeQuestions,
    selectDifficulty,
    updateCategory,
    setQuestionCount,
    generate,
  } = useQuiz();

  return (
    <div className="space-y-8 text-center">
      <p className="text-balance text-slate-400">
        Choose your difficulty level and set the number of questions to begin the quiz battles!
      </p>
      <div className="flex items-center justify-center space-x-4">
        {LEVELS.map((level, index) => (
          <button
            key={index}
            className={`rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium capitalize text-slate-50 transition-colors duration-150 hover:bg-blue-400 hover:text-slate-100 ${difficulty === level ? 'bg-blue-400' : null}`}
            onClick={() => selectDifficulty(level)}
          >
            {level}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-6">
        <p className="text-sm text-slate-400">Number of question/s:</p>
        <div className="flex items-center justify-center space-x-4">
          <input
            type="range"
            value={takeQuestions}
            min={1}
            max={totalQuestions}
            onChange={event => setQuestionCount(Number(event.target.value))}
          />
          <span className="font-bold">{takeQuestions}</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-md items-center justify-between">
        <button
          className="rounded-sm bg-slate-700 px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-slate-800"
          onClick={() => updateCategory()}
        >
          Change language
        </button>
        <button
          className="rounded-sm bg-blue-500 px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-blue-600"
          onClick={() => generate()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

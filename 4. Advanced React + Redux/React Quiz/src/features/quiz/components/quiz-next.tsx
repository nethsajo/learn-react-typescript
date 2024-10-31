import { ACTION, useQuiz } from 'shared/contexts/quiz';

export function QuizNext() {
  const { index, questions, answer, dispatch } = useQuiz();
  const numberOfQuestions = questions.length;

  if (answer === null) return null;

  if (index < numberOfQuestions - 1) {
    return (
      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch({ type: ACTION.NEXT_QUESTION })}
          className="rounded-sm bg-sky-500 px-6 py-1.5 font-medium text-slate-200 transition-colors duration-300 hover:bg-sky-600"
        >
          Next
        </button>
      </div>
    );
  }

  if (index === numberOfQuestions - 1) {
    return (
      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch({ type: ACTION.FINISH })}
          className="rounded-sm bg-sky-500 px-6 py-1.5 font-medium text-slate-200 transition-colors duration-300 hover:bg-sky-600"
        >
          Finish
        </button>
      </div>
    );
  }
}

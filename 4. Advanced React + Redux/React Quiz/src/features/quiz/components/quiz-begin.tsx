import { ACTION, useQuiz } from 'shared/contexts/quiz';
import { QuizDetail } from './quiz-detail';

export function QuizBegin() {
  const { difficulty, category, takeQuestions, dispatch } = useQuiz();

  return (
    <>
      <p className="text-balance text-center">
        Master <strong className="uppercase">{category}</strong> with WebDevNinja: {takeQuestions}{' '}
        questions, {difficulty} level. Your ultimate coding challenge awaits!
      </p>
      <div className="flex flex-col space-y-2 text-center">
        <QuizDetail label="Language" text={category} />
        <QuizDetail label="Difficulty" text={difficulty} />
        <QuizDetail label="Total question/s" text={takeQuestions} />
      </div>
      <button
        className="self-center rounded-sm bg-blue-500 px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-blue-600"
        onClick={() => dispatch({ type: ACTION.START })}
      >
        Let's Start
      </button>
    </>
  );
}

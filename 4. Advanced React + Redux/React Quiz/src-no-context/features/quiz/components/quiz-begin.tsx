import { QuizDetail } from './quiz-detail';

import { Dispatch } from 'react';
import { Action, Type } from 'src/App';

type Props = {
  dispatch: Dispatch<Action>;
  language: string;
  difficulty: string;
  total: number;
};

export function QuizBegin({ language, difficulty, total, dispatch }: Props) {
  return (
    <>
      <p className="text-balance text-center">
        Master <strong className="uppercase">{language}</strong> with WebDevNinja: {total}{' '}
        questions, {difficulty} level. Your ultimate coding challenge awaits!
      </p>
      <div className="flex flex-col space-y-2 text-center">
        <QuizDetail label="Language" text={language} />
        <QuizDetail label="Difficulty" text={difficulty} />
        <QuizDetail label="Total question/s" text={total} />
      </div>
      <button
        className="self-center rounded-sm bg-blue-500 px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-blue-600"
        onClick={() => dispatch({ type: Type.START })}
      >
        Let's Start
      </button>
    </>
  );
}

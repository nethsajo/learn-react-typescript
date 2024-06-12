import { LEVELS } from 'shared/constants/level';

import { Dispatch } from 'react';
import { Action, Type } from 'src/App';

type Props = {
  dispatch: Dispatch<Action>;
};

export function QuizDifficulty({ dispatch }: Props) {
  return (
    <div className="space-y-8 text-center">
      <p className="text-400 text-balance">
        Choose your difficulty level and set the number of questions to begin the quiz battles!
      </p>
      <div className="flex items-center justify-center space-x-4">
        {LEVELS.map((level, index) => (
          <button
            key={index}
            className={`rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium capitalize text-slate-300 hover:bg-blue-400 hover:text-slate-100`}
            onClick={() => dispatch({ type: Type.SELECT_DIFFICULTY, payload: level.toUpperCase() })}
          >
            {level}
          </button>
        ))}
      </div>
      <div className="">
        <div className="flex items-center justify-center space-x-4">
          <input type="range" value="1" />
        </div>
      </div>
    </div>
  );
}

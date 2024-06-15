import { LEVELS } from 'shared/constants/level';

import { ChangeEvent, Dispatch, useEffect, useState } from 'react';
import { Action, Type } from 'src/App';

type Props = {
  dispatch: Dispatch<Action>;
  difficulty: string;
  totalQuestions: number;
};

export function QuizDifficulty({ dispatch, difficulty, totalQuestions }: Props) {
  const [range, setRange] = useState(1);

  const handleSetNumberOfQuestions = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(Number(event.target.value));
    dispatch({ type: Type.SET_NUMBER_OF_QUESTIONS, payload: Number(event.target.value) });
  };

  // Reset the value of range when totalQuestions change
  useEffect(() => {
    setRange(1);
  }, [totalQuestions]);

  return (
    <div className="space-y-8 text-center">
      <p className="text-balance text-slate-400">
        Choose your difficulty level and set the number of questions to begin the quiz battles!
      </p>
      <div className="flex items-center justify-center space-x-4">
        {LEVELS.map((level, index) => (
          <button
            key={index}
            className={`rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium capitalize text-slate-50 hover:bg-blue-400 hover:text-slate-100 ${difficulty === level ? 'bg-blue-400' : null}`}
            onClick={() => dispatch({ type: Type.SELECT_DIFFICULTY, payload: level })}
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
            value={range}
            min={1}
            max={totalQuestions}
            onChange={handleSetNumberOfQuestions}
          />
          <span className="font-bold">{range}</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-md items-center justify-between">
        <button className="rounded-sm bg-slate-700 px-3 py-1.5 text-sm">Change language</button>
        <button className="rounded-sm bg-blue-500 px-3 py-1.5 text-sm">Next</button>
      </div>
    </div>
  );
}

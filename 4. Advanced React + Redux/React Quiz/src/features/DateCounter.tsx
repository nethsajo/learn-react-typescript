import { useReducer, type ChangeEvent } from 'react';

enum CountAction {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET_COUNT = 'SET_COUNT',
  SET_STEP = 'SET_STEP',
  RESET = 'RESET',
}

type Count = {
  type: CountAction;
  payload?: number;
};

type State = {
  count: number;
  step: number;
};

const initialState = { count: 0, step: 1 };

const reducer = (state: State, action: Count) => {
  switch (action.type) {
    case CountAction.INCREMENT:
      return {
        ...state,
        count: state.count + state.step,
      };
    case CountAction.DECREMENT:
      return {
        ...state,
        count: state.count - state.step,
      };
    case CountAction.SET_COUNT:
      return {
        ...state,
        count: action.payload ? action.payload : state.count,
      };
    case CountAction.SET_STEP:
      return {
        ...state,
        step: action.payload ? action.payload : state.step,
      };
    case CountAction.RESET:
      return initialState;
    default:
      throw new Error('Unknown action');
  }
};

export default function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date();
  date.setDate(date.getDate() + state.count);

  const handleStep = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CountAction.SET_STEP, payload: Number(e.target.value) });
  };

  const handleCount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CountAction.SET_COUNT, payload: Number(e.target.value) });
  };

  const handleIncrementCount = () => {
    dispatch({ type: CountAction.INCREMENT });
  };

  const handleDecrementCount = () => {
    dispatch({ type: CountAction.DECREMENT });
  };

  const handleReset = () => {
    dispatch({ type: CountAction.RESET });
  };

  const classes =
    'flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 font-bold text-white';

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-lg rounded-md border border-gray-200 bg-white p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <input type="range" value={state.step} onChange={handleStep} min={0} max={10} />
            <span>{state.step}</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <button onClick={handleDecrementCount} className={classes}>
              -
            </button>
            <input
              type="text"
              value={state.count}
              onChange={handleCount}
              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button onClick={handleIncrementCount} className={classes}>
              +
            </button>
          </div>
          <p className="text-center font-medium text-gray-500">
            {state.count === 0
              ? 'Today is '
              : `${state.count} ${state.count > 1 ? 'days' : 'day'} ${
                  state.count >= 1 ? 'from today is ' : 'ago was '
                }`}
            {date.toDateString()}
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-sm bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 outline-none transition-colors duration-300 hover:bg-gray-300 focus:border-gray-500"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  payload: number;
};

type State = {
  count: number;
  step: number;
};

const reducer = (state: State, action: Count) => {
  switch (action.type) {
    case CountAction.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case CountAction.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case CountAction.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case CountAction.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case CountAction.RESET:
      return {
        ...state,
        count: 0,
        step: 1,
      };
    default:
      return state;
  }
};

export default function DateCounter() {
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);

  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date();
  date.setDate(date.getDate() + state.count);

  const handleStep = (e: ChangeEvent<HTMLInputElement>) => {
    // setStep(Number(e.target.value));
    dispatch({ type: CountAction.SET_STEP, payload: Number(e.target.value) });
  };

  const handleCount = (e: ChangeEvent<HTMLInputElement>) => {
    // setCount(Number(e.target.value));
    dispatch({ type: CountAction.SET_COUNT, payload: Number(e.target.value) });
  };

  const handleIncrementCount = () => {
    // setCount(prevCount => prevCount + step);
    dispatch({ type: CountAction.INCREMENT, payload: state.step });
  };

  const handleDecrementCount = () => {
    // setCount(prevCount => prevCount - step);
    dispatch({ type: CountAction.DECREMENT, payload: state.step });
  };

  const handleReset = () => {
    // setStep(1);
    // setCount(0);
    // dispatch({ type: CountAction.RESET });
  };

  const classes =
    'flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 font-bold text-white';

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-lg rounded-md border-2 border-gray-200 bg-white p-8">
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

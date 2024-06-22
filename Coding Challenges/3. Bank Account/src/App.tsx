import { useReducer } from 'react';

enum Transaction {
  'SET_OPEN_ACCOUNT' = 'SET_OPEN_ACCOUNT',
}

type State = {
  balance: number;
  loan: number;
  isOpen: boolean;
  isLoanRequested: boolean;
};

type Action<T extends keyof typeof Transaction, P = void> = {
  type: T;
  payload?: P;
};

type Actions = Action<Transaction.SET_OPEN_ACCOUNT, number>;

const initialState: State = {
  balance: 0,
  loan: 0,
  isOpen: false,
  isLoanRequested: false,
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case Transaction.SET_OPEN_ACCOUNT:
      return {
        ...state,
      };
    default:
      throw new Error('Unknown action!');
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>useReducer Bank Account</div>;
}

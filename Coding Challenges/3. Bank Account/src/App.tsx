import { Reducer, useReducer } from 'react';
import { Button } from 'shared/components/ui/button';

export enum Transaction {
  'SET_OPEN_ACCOUNT' = 'SET_OPEN_ACCOUNT',
  'SET_DEPOSIT_ACCOUNT' = 'SET_DEPOSIT_ACCOUNT',
  'SET_WITHDRAW_ACCOUNT' = 'SET_WITHDRAW_ACCOUNT',
  'SET_REQUEST_LOAN' = 'SET_REQUEST_LOAN',
  'SET_PAY_LOAN' = 'SET_PAY_LOAN',
  'SET_CLOSE_ACCOUNT' = 'SET_CLOSE_ACCOUNT',
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

export type Actions =
  | Action<Transaction.SET_OPEN_ACCOUNT>
  | Action<Transaction.SET_DEPOSIT_ACCOUNT, number>
  | Action<Transaction.SET_WITHDRAW_ACCOUNT, number>
  | Action<Transaction.SET_REQUEST_LOAN, number>
  | Action<Transaction.SET_PAY_LOAN>
  | Action<Transaction.SET_CLOSE_ACCOUNT>;

const initialState: State = {
  balance: 0,
  loan: 0,
  isOpen: false,
  isLoanRequested: false,
};

const reducer: Reducer<State, Actions> = (state, action): State => {
  if (!state.isOpen && action.type !== Transaction.SET_OPEN_ACCOUNT) return state;

  switch (action.type) {
    case Transaction.SET_OPEN_ACCOUNT:
      return {
        ...state,
        balance: state.balance + 500,
        isOpen: true,
      };
    case Transaction.SET_DEPOSIT_ACCOUNT:
      return {
        ...state,
        balance: state.balance + (action.payload ?? 0),
      };
    case Transaction.SET_WITHDRAW_ACCOUNT:
      return {
        ...state,
        balance: state.balance - (action.payload ?? 0),
      };
    case Transaction.SET_REQUEST_LOAN:
      if (state.loan > 0) return state;

      return {
        ...state,
        isLoanRequested: true,
        loan: state.loan + (action.payload ?? 0),
        balance: state.balance + (action.payload ?? 0),
      };
    case Transaction.SET_PAY_LOAN:
      return {
        ...state,
        isLoanRequested: false,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case Transaction.SET_CLOSE_ACCOUNT:
      if (state.balance === 0 && state.loan === 0) return initialState;

      return state;
    default:
      throw new Error('Unknown action!');
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenAccount = () => {
    dispatch({ type: Transaction.SET_OPEN_ACCOUNT });
  };
  const handleDeposit = () => {
    dispatch({ type: Transaction.SET_DEPOSIT_ACCOUNT, payload: 150 });
  };
  const handleWithdraw = () => {
    dispatch({ type: Transaction.SET_WITHDRAW_ACCOUNT, payload: 50 });
  };
  const handleRequestLoan = () => {
    dispatch({ type: Transaction.SET_REQUEST_LOAN, payload: 5000 });
  };
  const handlePayLoan = () => {
    dispatch({ type: Transaction.SET_PAY_LOAN });
  };
  const handleCloseAccount = () => {
    dispatch({ type: Transaction.SET_CLOSE_ACCOUNT });
  };

  return (
    <div className="mx-auto flex max-w-md flex-col items-center space-y-6 pt-11">
      <header className="flex flex-col items-center space-y-2">
        <h1 className="text-lg font-bold">useReducer Bank Account</h1>
        <div className="grid grid-cols-[100px_1fr]">
          <p className="text-sm font-medium">Balance</p>
          <p className="text-sm">{state.balance}</p>
        </div>
        <div className="grid grid-cols-[100px_1fr]">
          <p className="text-sm font-medium">Loan</p>
          <p className="text-sm">{state.loan}</p>
        </div>
      </header>
      <div className="flex flex-wrap justify-center gap-1">
        <Button disabled={state.isOpen} dispatch={handleOpenAccount}>
          Open account
        </Button>
        <Button disabled={!state.isOpen} dispatch={handleDeposit}>
          Deposit 150
        </Button>
        <Button disabled={!state.isOpen || state.balance === 0} dispatch={handleWithdraw}>
          Withdraw 50
        </Button>
        <Button disabled={!state.isOpen || state.isLoanRequested} dispatch={handleRequestLoan}>
          Request a loan of 5000
        </Button>
        <Button disabled={!state.isOpen || !state.isLoanRequested} dispatch={handlePayLoan}>
          Pay loan
        </Button>
        <Button
          disabled={!state.isOpen || state.balance !== 0 || state.loan !== 0}
          dispatch={handleCloseAccount}
        >
          Close account
        </Button>
      </div>
    </div>
  );
}

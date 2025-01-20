import { type AppDispatch } from '@/store';

export enum AccountAction {
  DEPOSIT = 'account/deposit',
  WITHDRAW = 'account/withdraw',
  REQUEST_LOAN = 'account/request-loan',
  PAY_LOAN = 'account/pay-loan',
  CONVERTING = 'account/converting',
}

export interface Account {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialState: Account = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

interface Deposit {
  type: AccountAction.DEPOSIT;
  payload: number;
}

interface Withdraw {
  type: AccountAction.WITHDRAW;
  payload: number;
}

interface RequestLoan {
  type: AccountAction.REQUEST_LOAN;
  payload: Pick<Account, 'loan' | 'loanPurpose'>;
}

interface PayLoan {
  type: AccountAction.PAY_LOAN;
}

interface Converting {
  type: AccountAction.CONVERTING;
}

type AccountActions = Deposit | Withdraw | RequestLoan | PayLoan | Converting;

export const accountReducer = (state = initialState, action: AccountActions): Account => {
  switch (action.type) {
    case AccountAction.DEPOSIT:
      return { ...state, balance: state.balance + action.payload, isLoading: false };
    case AccountAction.WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case AccountAction.REQUEST_LOAN:
      if (state.loan > 0) return state;

      return {
        ...state,
        loan: action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.loan,
      };
    case AccountAction.PAY_LOAN:
      return { ...state, loanPurpose: '', loan: 0, balance: state.balance - state.loan };
    case AccountAction.CONVERTING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

// Action Creators
export const deposit = (amount: number, currency: string) => {
  if (currency === 'USD') return { type: AccountAction.DEPOSIT, payload: amount };

  return async function (dispatch: AppDispatch) {
    dispatch({ type: AccountAction.CONVERTING });
    const response = await fetch(
      // API call
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await response.json();
    const converted = data.rates.USD;

    dispatch({ type: AccountAction.DEPOSIT, payload: converted });
  };
};

export const withdraw = (amount: number) => {
  return { type: AccountAction.WITHDRAW, payload: amount };
};

export const requestLoan = (amount: number, purpose: string) => {
  return { type: AccountAction.REQUEST_LOAN, payload: { loan: amount, loanPurpose: purpose } };
};

export const payLoan = () => {
  return { type: AccountAction.PAY_LOAN };
};

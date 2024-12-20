import { createStore } from 'redux';

enum ACTION {
  DEPOSIT = 'account/deposit',
  WITHDRAW = 'account/withdraw',
  REQUEST_LOAN = 'account/request-loan',
  PAY_LOAN = 'account/pay-loan',
}

export type Account = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

const account: Account = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

interface AccountDeposit {
  type: ACTION.DEPOSIT;
  payload: number;
}

interface AccountWithdraw {
  type: ACTION.WITHDRAW;
  payload: number;
}

interface AccountRequestLoan {
  type: ACTION.REQUEST_LOAN;
  payload: Pick<Account, 'loan' | 'loanPurpose'>;
}

interface AccountPayLoan {
  type: ACTION.PAY_LOAN;
}

type Actions = AccountDeposit | AccountWithdraw | AccountRequestLoan | AccountPayLoan;

const reducer = (state = account, action: Actions) => {
  switch (action.type) {
    case ACTION.DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
    case ACTION.WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case ACTION.REQUEST_LOAN:
      if (state.loan > 0) return state;

      return {
        ...state,
        loan: action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.loan,
      };
    case ACTION.PAY_LOAN:
      return { ...state, loanPurpose: '', loan: 0, balance: state.balance - state.loan };
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.dispatch({ type: ACTION.DEPOSIT, payload: 500 });
// store.dispatch({ type: ACTION.WITHDRAW, payload: 200 });
// console.log(store.getState());

// store.dispatch({ type: ACTION.REQUEST_LOAN, payload: { loan: 1000, loanPurpose: 'Buy a car' } });
// console.log(store.getState());

// store.dispatch({ type: ACTION.PAY_LOAN });
// console.log(store.getState());

// Action Creator Functions
const deposit = (amount: number): AccountDeposit => {
  return { type: ACTION.DEPOSIT, payload: amount };
};

const withdraw = (amount: number): AccountWithdraw => {
  return { type: ACTION.WITHDRAW, payload: amount };
};

const requestLoan = (amount: number, purpose: string): AccountRequestLoan => {
  return { type: ACTION.REQUEST_LOAN, payload: { loan: amount, loanPurpose: purpose } };
};

const payLoan = (): AccountPayLoan => {
  return { type: ACTION.PAY_LOAN };
};

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
// console.log(store.getState());

store.dispatch(requestLoan(1000, 'Buy a cheap car'));
// console.log(store.getState());

store.dispatch(payLoan());
// console.log(store.getState());

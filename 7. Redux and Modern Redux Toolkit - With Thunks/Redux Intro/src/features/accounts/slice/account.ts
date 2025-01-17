enum ACTION {
  DEPOSIT = 'account/deposit',
  WITHDRAW = 'account/withdraw',
  REQUEST_LOAN = 'account/request-loan',
  PAY_LOAN = 'account/pay-loan',
}

type Account = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

const initialState: Account = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

interface Deposit {
  type: ACTION.DEPOSIT;
  payload: number;
}

interface Withdraw {
  type: ACTION.WITHDRAW;
  payload: number;
}

interface RequestLoan {
  type: ACTION.REQUEST_LOAN;
  payload: Pick<Account, 'loan' | 'loanPurpose'>;
}

interface PayLoan {
  type: ACTION.PAY_LOAN;
}

type AccountActions = Deposit | Withdraw | RequestLoan | PayLoan;

export const accountReducer = (state = initialState, action: AccountActions): Account => {
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

export const deposit = (amount: number): Deposit => {
  return { type: ACTION.DEPOSIT, payload: amount };
};

export const withdraw = (amount: number): Withdraw => {
  return { type: ACTION.WITHDRAW, payload: amount };
};

export const requestLoan = (amount: number, purpose: string): RequestLoan => {
  return { type: ACTION.REQUEST_LOAN, payload: { loan: amount, loanPurpose: purpose } };
};

export const payLoan = (): PayLoan => {
  return { type: ACTION.PAY_LOAN };
};

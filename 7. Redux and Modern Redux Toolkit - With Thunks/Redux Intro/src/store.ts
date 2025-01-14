import { combineReducers, createStore } from 'redux';

// Account
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

type AccountActions = AccountDeposit | AccountWithdraw | AccountRequestLoan | AccountPayLoan;

const accountReducer = (state = account, action: AccountActions) => {
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

// Customer
export type Customer = {
  full_name: string;
  national_id: string;
  created_at: string;
};

const initialStateCustomer: Customer = {
  full_name: '',
  national_id: '',
  created_at: '',
};

interface CustomerCreate {
  type: 'customer/create';
  payload: Customer;
}

interface CustomerUpdate {
  type: 'customer/update';
  payload: string;
}

type CustomerActions = CustomerCreate | CustomerUpdate;

const customerReducer = (
  state: Customer = initialStateCustomer,
  action: CustomerActions
): Customer => {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        full_name: action.payload.full_name,
        national_id: action.payload.national_id,
        created_at: action.payload.created_at,
      };
    case 'customer/update':
      return {
        ...state,
        full_name: action.payload,
      };
    default:
      return state;
  }
};

// Combining Reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: ACTION.DEPOSIT, payload: 500 });
// store.dispatch({ type: ACTION.WITHDRAW, payload: 200 });
// console.log(store.getState());

// store.dispatch({ type: ACTION.REQUEST_LOAN, payload: { loan: 1000, loanPurpose: 'Buy a car' } });
// console.log(store.getState());

// store.dispatch({ type: ACTION.PAY_LOAN });
// console.log(store.getState());

// Action Creator Functions - Account
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
console.log(store.getState());

// Action Creator Functions - Customer
const createCustomer = (fullName: string, nationalId: string): CustomerCreate => {
  return {
    type: 'customer/create',
    payload: { full_name: fullName, national_id: nationalId, created_at: new Date().toISOString() },
  };
};

const updateCustomer = (fullName: string) => {
  return { type: 'customer/update', payload: fullName };
};

store.dispatch(createCustomer('Jan Kenneth Sajo', 'Filipino'));
store.dispatch(deposit(250));
console.log(store.getState());

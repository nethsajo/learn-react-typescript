import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state: Account, action: PayloadAction<{ amount: number; currency: string }>) {
      state.balance = state.balance + action.payload.amount;
    },
    withdraw(state: Account, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },
    // By default, these action creators only accept one single argument
    requestLoan: {
      prepare(amount: number, purpose: string) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state: Account, action: PayloadAction<{ amount: number; purpose: string }>) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    // If we pass an object, use this
    // requestLoan(state: Account, action: PayloadAction<{ amount: number; purpose: string }>) {
    //   if (state.loan > 0) return;

    //   state.loan = action.payload.amount;
    //   state.loanPurpose = action.payload.purpose;
    //   state.balance = state.balance + action.payload.amount;
    // },
    payLoan(state: Account) {
      state.loan = 0;
      state.loanPurpose = '';
      state.balance = state.balance - state.loan;
    },
  },
});

export const accountReducer = accountSlice.reducer;
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

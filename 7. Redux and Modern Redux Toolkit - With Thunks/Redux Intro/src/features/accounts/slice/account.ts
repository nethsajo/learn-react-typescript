import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

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

export const depositAmount = createAsyncThunk(
  'account/deposit',
  async ({ amount, currency }: { amount: number; currency: string }) => {
    if (currency === 'USD') return amount;
    const route = 'https://api.frankfurter.dev/v1/latest';
    const response = await fetch(`${route}?amount=${amount}&from=${currency}&to=USD`);
    const data = await response.json();
    return data.rates.USD;
  }
);

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
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
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(depositAmount.pending, (state: Account) => {
      state.isLoading = true;
    });
  },
});

export const accountReducer = accountSlice.reducer;
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

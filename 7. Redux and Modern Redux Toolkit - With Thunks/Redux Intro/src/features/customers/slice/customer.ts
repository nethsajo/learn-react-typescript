import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Customer {
  full_name: string;
  national_id: string;
  created_at: string;
}

const initialState: Customer = {
  full_name: '',
  national_id: '',
  created_at: '',
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    create: {
      prepare(fullName: string, nationalId: string) {
        return {
          payload: { fullName, nationalId },
        };
      },
      reducer(state: Customer, action: PayloadAction<{ fullName: string; nationalId: string }>) {
        state.full_name = action.payload.fullName;
        state.national_id = action.payload.nationalId;
        state.created_at = new Date().toISOString();
      },
    },
    update(state: Customer, action: PayloadAction<Omit<Customer, 'created_at'>>) {
      state.full_name = action.payload.full_name;
      state.national_id = action.payload.national_id;
    },
  },
});

export const customerReducer = customerSlice.reducer;
export const { create, update } = customerSlice.actions;

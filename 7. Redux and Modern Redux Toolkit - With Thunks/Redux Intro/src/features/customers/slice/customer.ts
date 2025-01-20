import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});

export const customerReducer = customerSlice.reducer;

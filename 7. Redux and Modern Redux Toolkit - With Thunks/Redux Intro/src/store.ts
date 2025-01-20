import { configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { accountReducer } from './features/accounts/slice/account';
import { customerReducer } from './features/customers/slice/customer';

// Combining Reducer
export const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppStore: () => AppStore = useStore;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

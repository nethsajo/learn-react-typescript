import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { accountReducer } from './features/accounts/slice/account.redux';
import { customerReducer } from './features/customers/slice/customer.redux';

// Combining Reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

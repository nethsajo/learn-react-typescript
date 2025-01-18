import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { accountReducer } from './features/accounts/slice/account';
import { customerReducer } from './features/customers/slice/customer';

// Combining Reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

const store = createStore(rootReducer);

export default store;

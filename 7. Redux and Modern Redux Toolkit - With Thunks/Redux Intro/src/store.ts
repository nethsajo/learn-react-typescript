import { combineReducers, createStore } from 'redux';
import { accountReducer } from './features/accounts/slice/account';
import { customerReducer } from './features/customers/slice/customer';

// Combining Reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

import { createStore } from 'redux';

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

const store = createStore(customerReducer);

const createCustomer = (fullName: string, nationalId: string) => {
  return {
    type: 'customer/create',
    payload: { full_name: fullName, national_id: nationalId, created_at: new Date().toISOString() },
  };
};

const updateCustomer = (fullName: string) => {
  return { type: 'customer/update', payload: fullName };
};

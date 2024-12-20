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

type Actions = CustomerCreate;

const reducer = (state: Customer = initialStateCustomer, action: Actions): Customer => {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        full_name: action.payload.full_name,
        national_id: action.payload.national_id,
        created_at: action.payload.created_at,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const createCustomer = (fullName: string, nationalId: string) => {
  return {
    type: 'customer/create',
    payload: { full_name: fullName, national_id: nationalId, created_at: new Date().toISOString() },
  };
};

const updateCustomer = (fullName: string) => {
  return { type: '' };
};

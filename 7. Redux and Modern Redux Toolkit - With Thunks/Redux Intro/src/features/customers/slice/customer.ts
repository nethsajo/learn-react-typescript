enum ACTION {
  CREATE = 'customer/create',
  UPDATE = 'customer/update',
}

type Customer = {
  full_name: string;
  national_id: string;
  created_at: string;
};

const initialState: Customer = {
  full_name: '',
  national_id: '',
  created_at: '',
};

interface Create {
  type: 'customer/create';
  payload: Customer;
}

interface Update {
  type: 'customer/update';
  payload: string;
}

type CustomerActions = Create | Update;

export const customerReducer = (state = initialState, action: CustomerActions): Customer => {
  switch (action.type) {
    case ACTION.CREATE:
      return {
        ...state,
        full_name: action.payload.full_name,
        national_id: action.payload.national_id,
        created_at: action.payload.created_at,
      };
    case ACTION.UPDATE:
      return {
        ...state,
        full_name: action.payload,
      };
    default:
      return state;
  }
};

export const createCustomer = (fullName: string, nationalId: string): Create => {
  return {
    type: 'customer/create',
    payload: { full_name: fullName, national_id: nationalId, created_at: new Date().toISOString() },
  };
};

export const updateCustomer = (fullName: string): Update => {
  return { type: 'customer/update', payload: fullName };
};

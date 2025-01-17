export enum CustomerAction {
  CREATE = 'customer/create',
  UPDATE = 'customer/update',
}

type Customer = {
  full_name: string;
  national_id: string;
  created_at: string;
};

const initialState: Customer = {
  full_name: 'Jan Kenneth Sajo',
  national_id: '',
  created_at: '',
};

interface Create {
  type: CustomerAction.CREATE;
  payload: Customer;
}

interface Update {
  type: CustomerAction.UPDATE;
  payload: string;
}

type CustomerActions = Create | Update;

export const customerReducer = (state = initialState, action: CustomerActions): Customer => {
  switch (action.type) {
    case CustomerAction.CREATE:
      return {
        ...state,
        full_name: action.payload.full_name,
        national_id: action.payload.national_id,
        created_at: action.payload.created_at,
      };
    case CustomerAction.UPDATE:
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
    type: CustomerAction.CREATE,
    payload: { full_name: fullName, national_id: nationalId, created_at: new Date().toISOString() },
  };
};

export const updateCustomer = (fullName: string): Update => {
  return { type: CustomerAction.UPDATE, payload: fullName };
};

import { createContext, type Reducer, useContext, useReducer } from 'react';

export const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'password',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

export type Credentials = {
  email: string;
  password: string;
};

export type AuthenticatedUser = typeof FAKE_USER;

enum ACTIONS {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type State = {
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
};

const initialState: State = {
  user: null,
  isAuthenticated: false,
};

type Action = { type: ACTIONS.LOGIN; payload: AuthenticatedUser } | { type: ACTIONS.LOGOUT };

const AuthContext = createContext<
  State & { login: ({ email, password }: Credentials) => void; logout: () => void }
>({
  ...initialState,
  login: () => {},
  logout: () => {},
});

const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error('Unknown action type');
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = ({ email, password }: Credentials) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: ACTIONS.LOGIN, payload: FAKE_USER });
    }
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('AuthContext was used outside the AuthProvider');
  return context;
};

export { AuthProvider, useAuth };

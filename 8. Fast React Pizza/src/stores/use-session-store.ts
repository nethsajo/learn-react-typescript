import { create } from 'zustand';

export type SessionStoreState = {
  username?: string;
};

export type SessionStoreActions = {
  reset: () => void;
  setUser: (username?: string) => void;
};

export type SessionStore = SessionStoreState & SessionStoreActions;

export const DEFAULT_SESSION_STORE_STATE: SessionStoreState = {
  username: '',
};

export const useSessionStore = create<SessionStore>()(set => ({
  ...DEFAULT_SESSION_STORE_STATE,
  reset: () => set(DEFAULT_SESSION_STORE_STATE),
  setUser: username => set({ username }),
}));

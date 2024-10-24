import { BASE_URL } from '@/constants/common';
import type React from 'react';
import { createContext, type Reducer, useContext, useEffect, useReducer } from 'react';

export type City = {
  id: string;
  cityName: string;
  country: string;
  abbreviation: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
};

enum ACTIONS {
  LOADING = 'LOADING',
  CITIES_LOADED = 'CITIES_LOADED',
  CITIES_CREATED = 'CITIES_CREATED',
  CITIES_DELETED = 'CITIES_DELETED',
  CITY_LOADED = 'CITY_LOADED',
  REJECTED = 'REJECTED',
}

type State = {
  cities: City[];
  currentCity: City | null;
  isLoading: boolean;
  error: string;
};

const initialState: State = {
  cities: [],
  currentCity: null,
  isLoading: false,
  error: '',
};

type Action =
  | { type: ACTIONS.CITIES_LOADED; payload: City[] }
  | { type: ACTIONS.CITIES_CREATED; payload: City }
  | { type: ACTIONS.CITIES_DELETED; payload: string }
  | { type: ACTIONS.CITY_LOADED; payload: City }
  | { type: ACTIONS.LOADING }
  | { type: ACTIONS.REJECTED; payload: string };

const CitiesContext = createContext<
  State & {
    getCity: (id: string) => void;
    createCity: (city: City) => Promise<void>;
    deleteCity: (id: string) => Promise<void>;
  }
>({
  ...initialState,
  getCity: () => {},
  createCity: async () => Promise.resolve(),
  deleteCity: async () => Promise.resolve(),
});

const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.CITIES_LOADED:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case ACTIONS.CITIES_CREATED:
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case ACTIONS.CITIES_DELETED:
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(city => city.id !== action.payload),
      };
    case ACTIONS.CITY_LOADED:
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case ACTIONS.REJECTED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error('Unknown action type');
  }
};

const CitiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: ACTIONS.LOADING });

      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const data = (await response.json()) as City[];
        dispatch({ type: ACTIONS.CITIES_LOADED, payload: data });
      } catch {
        dispatch({ type: ACTIONS.REJECTED, payload: 'There was an error loading data...' });
      }
    };

    fetchCities();
  }, []);

  const getCity = async (id: string) => {
    if (id === state.currentCity?.id) return;

    dispatch({ type: ACTIONS.LOADING });

    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = (await response.json()) as City;
      dispatch({ type: ACTIONS.CITY_LOADED, payload: data });
    } catch {
      dispatch({ type: ACTIONS.REJECTED, payload: 'There was an error loading data...' });
    }
  };

  const createCity = async (payload: City): Promise<void> => {
    dispatch({ type: ACTIONS.LOADING });

    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = (await response.json()) as City;
      dispatch({ type: ACTIONS.CITIES_CREATED, payload: data });
    } catch (error) {
      dispatch({ type: ACTIONS.REJECTED, payload: 'There was an error creating city...' });
    }
  };

  const deleteCity = async (id: string) => {
    dispatch({ type: ACTIONS.LOADING });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, { method: 'DELETE' });
      dispatch({ type: ACTIONS.CITIES_DELETED, payload: id });
    } catch {
      dispatch({ type: ACTIONS.REJECTED, payload: 'There was an error deleting city...' });
    }
  };

  return (
    <CitiesContext.Provider value={{ ...state, getCity, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
};

export { CitiesProvider, useCities };

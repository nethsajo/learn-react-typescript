import { BASE_URL } from '@/constants/common';
import type React from 'react';
import { createContext, type Reducer, useContext, useEffect, useReducer, useState } from 'react';

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
  FETCH_CITIES = 'FETCH_CITIES',
  FETCH_CITY = 'FETCH_CITY',
  SET_CURRENT_CITY = 'SET_CURRENT_CITY',
  CREATE_CITY = 'CREATE_CITY',
  DELETE_CITY = 'DELETE_CITY',
  LOADING = 'LOADING',
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

type Action = { type: 'FETCH_CITIES'; payload: City[] };

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
    case ACTIONS.FETCH_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      throw new Error('Unknown action type');
  }
};

const CitiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        setError('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const getCity = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      setError('There was an error loading data...');
    } finally {
      setIsLoading(false);
    }
  };

  const createCity = async (payload: City): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await response.json();
      setCities(cities => [...cities, data]);
    } catch (error) {
      setError('There was an error creating city...');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCity = async (id: string) => {
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      setCities(cities => cities.filter(city => city.id !== id));
    } catch {
      setError('There was an error deleting city...');
    }
  };

  return (
    <CitiesContext.Provider
      value={{ cities, getCity, createCity, deleteCity, currentCity, isLoading, error }}
    >
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

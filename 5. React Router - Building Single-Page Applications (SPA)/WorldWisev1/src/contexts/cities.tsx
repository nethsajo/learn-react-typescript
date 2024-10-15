import { BASE_URL } from '@/constants/common';
import { type City } from '@/data/cities';
import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type State = {
  cities: City[];
  getCity: (id: string) => void;
  currentCity: City | null;
  isLoading: boolean;
  error: string;
};

const CitiesContext = createContext<State>({
  cities: [],
  getCity: () => {},
  currentCity: null,
  isLoading: false,
  error: '',
});

const CitiesProvider = ({ children }: { children: React.ReactNode }) => {
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
  });

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

  return (
    <CitiesContext.Provider value={{ cities, getCity, currentCity, isLoading, error }}>
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

import { type City } from '@/data/cities';
import React, { type Dispatch, type SetStateAction, useContext, useState } from 'react';

type Children = {
  children: React.ReactNode;
};

type State = {
  currentCity: City | null;
  setCurrentCity: Dispatch<SetStateAction<City | null>>;
};

const CityContext = React.createContext<State>({
  currentCity: null,
  setCurrentCity: () => {},
});

const CityProvider = ({ children }: Children) => {
  const [currentCity, setCurrentCity] = useState<City | null>(null);

  const values = {
    currentCity,
    setCurrentCity,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

const useCurrentCity = () => {
  const context = useContext(CityContext);
  if (context === undefined) throw new Error('CityContext was used outside the CityProvider');
  return context;
};

export { CityProvider, useCurrentCity };

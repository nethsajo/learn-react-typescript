import { type City } from '@/types/city';
import React, { useContext } from 'react';

type Children = {
  children: React.ReactNode;
};

const CityContext = React.createContext<City | null>(null);

const CityProvider = ({ children }: Children) => {
  return <CityContext.Provider value={{ id: 1 }}>{children}</CityContext.Provider>;
};

const useCurrentCity = () => {
  const context = useContext(CityContext);
  if (context === undefined) throw new Error('CityContext was used outside the CityProvider');
  return context;
};

export { CityProvider, useCurrentCity };

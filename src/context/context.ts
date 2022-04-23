import { createContext, useContext } from 'react';
import { Weather } from '../models';

export const WeatherContext = createContext({
  weatherState: {} as Weather,
  isLoading: true,
  displayTemp: 'celsius',
  setWeatherState: (weatherState: Weather): void => {},
  setIsLoading: (isLoading: boolean): void => {},
  setDisplayTemp: (displayTemp: string): void => {},
  setSearch: (search: boolean): void => {},
});

export const useWeatherContext = () => useContext(WeatherContext);

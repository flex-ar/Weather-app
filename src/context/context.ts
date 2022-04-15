import { createContext, useContext } from 'react';
import { Weather } from '../models';

export const WeatherContext = createContext({
  weatherState: {} as Weather,
  isLoading: true,
  displayTemp: 'celsius',
  setWeatherState: (weatherState: Weather): void => {},
  setDisplayTemp: (displayTemp: string): void => {}
});

export const useWeatherContext = () => useContext(WeatherContext);

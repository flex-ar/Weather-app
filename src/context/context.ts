import { createContext, useContext, useState } from 'react';
import { Weather } from '../models';

export const WeatherContext = createContext({
  weatherState: {} as Weather,
  setWeatherState: (weatherState: Weather): void => {}
});

export const useWeatherContext = () => useContext(WeatherContext);

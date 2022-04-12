import { useEffect, useState } from 'react';
import { Weather } from '../models';
import { getWeather } from '../services';

export const useWeather = (locationId: number) => {

  const [weather, setWeather] = useState({} as Weather);

  useEffect(() => {
    getWeather(locationId)
      .then(_weather => setWeather(_weather))
      .catch( console.error )
  }, []);


  return { weather };

};

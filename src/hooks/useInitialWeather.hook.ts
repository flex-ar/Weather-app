import { useEffect, useState } from 'react';
import { Weather } from '../models';
import { getCurrentLocation, getWeather } from '../services';

export const useInitialWeather = () => {

  const [weather, setWeather] = useState({} as Weather);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentLocation()
      .then(async({ location_id }) => await getWeather( location_id ))
      .then(weather => {
        setIsLoading(false);
        setWeather(weather);
      })
      .catch( console.error );
  }, []);

  return {
    weather,
    setWeather,
    isLoading
  };

};
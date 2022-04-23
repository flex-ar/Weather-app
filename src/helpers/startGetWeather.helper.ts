import { useWeatherContext } from '../context';
import { Weather } from '../models';
import { getWeather } from '../services';

export const startGetWeather = (
  locationId: number,
  setWeatherState: (weatherState: Weather) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);
  getWeather(locationId)
    .then(_weather => {
      setWeatherState(_weather);
      setIsLoading(false);
    })
    .catch( console.error );
};

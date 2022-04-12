import { Temp } from '../models';

export const celsiusToFahrenheit = (temp: number): Temp => ({
  celsius: Math.round(temp),
  fahrenheit: Math.round((temp * 9/5) + 32)
});

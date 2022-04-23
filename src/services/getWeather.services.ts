import { EndpointWeather, Weather } from '../models';

export const getWeather = async(locationId: number): Promise<Weather> => {
  try {
    // import module
    const { URLs } = await import('./URLs.services');

    // get data
    const response = await fetch(`${URLs.ID}${locationId}`);
    const weather: EndpointWeather = await response.json();

    // import modules
    const { formatDate_dddDMMM } = await import('../helpers');
    const { celsiusToFahrenheit } = await import('../helpers');

    // return adapted location
    return {
      weathers: weather.consolidated_weather.map(day => ({
        weather_state_name: day.weather_state_name,
        weather_state_abbr: day.weather_state_abbr,
        created: formatDate_dddDMMM(day.created),
        applicable_date: formatDate_dddDMMM(day.applicable_date),
        min_temp: celsiusToFahrenheit(day.min_temp),
        max_temp: celsiusToFahrenheit(day.max_temp),
        temp: celsiusToFahrenheit(day.the_temp),
        wind_speed: Math.round(day.wind_speed),
        wind_direction: Math.round(day.wind_direction),
        wind_direction_compass: day.wind_direction_compass,
        air_pressure: Math.round(day.air_pressure),
        humidity: Math.round(day.humidity),
        visibility: +(day.visibility.toFixed(1)),
        predictability: Math.round(day.predictability),
      })),
      time: formatDate_dddDMMM(weather.time),
      sun_rise: formatDate_dddDMMM(weather.sun_rise),
      sun_set: formatDate_dddDMMM(weather.sun_set),
      city: weather.title
    };
  } catch (error) {
    console.error(error);
    throw Error('Error en getWeather');
  };
};

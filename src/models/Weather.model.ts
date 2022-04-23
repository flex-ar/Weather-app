import { Temp } from './Temp.model';

interface EndpointConsolidatedWeather {
  weather_state_name: string
  weather_state_abbr: string
  wind_direction_compass: string
  created: string
  applicable_date: string
  min_temp: number
  max_temp: number
  the_temp: number
  wind_speed: number
  wind_direction: number
  air_pressure: number
  humidity: number
  visibility: number
  predictability: number
};

export interface EndpointWeather {
  consolidated_weather: EndpointConsolidatedWeather[]
  time: string
  sun_rise: string
  sun_set: string
  title: string
};

export interface WeatherDay {
  weather_state_name: string
  weather_state_abbr: string
  created: string
  applicable_date: string
  min_temp: Temp
  max_temp: Temp
  temp: Temp
  wind_speed: number
  wind_direction: number
  wind_direction_compass: string
  air_pressure: number
  humidity: number
  visibility: number
  predictability: number
};

export interface Weather {
  weathers: WeatherDay[]
  time: string
  sun_rise: string
  sun_set: string
  city: string
};

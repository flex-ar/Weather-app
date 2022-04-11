export interface EndpointLocation {
  latt_long: string
  location_type: string
  title: string
  woeid: number
};

export interface Location {
  location_name: string
  location_id: number
};

export interface EndpointConsolidatedWeather {
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
}

export interface EndpointWeather {
  consolidated_weather: EndpointConsolidatedWeather[]
  time: string
  sun_rise: string
  sun_set: string
  title: string
}

export interface Temp {
  celsius: number
  fahrenheit: number
};

interface WeatherDay {
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
};

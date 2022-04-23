import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { AllWeatherInfo, SimpleWeatherInfo } from './components';
import { WeatherContext } from './context';
import { useInitialWeather } from './hooks';

export const WeatherApp = () => {

  const { weatherState, setWeatherState, isLoading, setIsLoading} = useInitialWeather();
  const [displayTemp, setDisplayTemp] = useState('celsius');
  const [search, setSearch] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        weatherState,
        isLoading,
        displayTemp,
        setWeatherState,
        setIsLoading,
        setDisplayTemp,
        setSearch
      }}
    >
      <Stack
        direction={['column', 'column', 'row']}
        h="100vh"
        spacing={0}
        w="100vw"
      >
        <SimpleWeatherInfo search={search}/>
        <AllWeatherInfo />
      </Stack>
    </WeatherContext.Provider>
  );
};

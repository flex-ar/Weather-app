import { VStack } from '@chakra-ui/react';
import { LocationsButtons } from './LocationsButtons';
import { SearchLocations } from './searchLocations/SearchLocations';
import { WeatherDayImg } from './WeatherDayImg';
import { WeatherDayInfo } from './WeatherDayInfo';

interface Prop {
  search: boolean
};

export const SimpleWeatherInfo = ({ search }: Prop) => {
  return (
    <VStack
      bg="bg.1"
      color="text.1"
      fontFamily="Raleway"
      justify={search ? "start" : "center"}
      spacing={search ? "35px" : ""}
      w={["100%", "100%", "30%"]}
    >
      {
        search
        ? <SearchLocations />
        : <>
          <LocationsButtons />
          <WeatherDayImg />
          <WeatherDayInfo />
        </>
      }
    </VStack>
  );
};

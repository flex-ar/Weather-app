import { Button } from '@chakra-ui/react';
import { useWeatherContext } from '../../../context';
import { startGetWeather } from '../../../helpers';
import { Location } from '../../../models';

export const SearchLocationsButtons = ({ location_id, location_name }: Location) => {

  const { setWeatherState, setIsLoading, isLoading } = useWeatherContext();

  const handleClick = () => {
    startGetWeather(location_id, setWeatherState, setIsLoading);
  };

  return (
    <Button
      border=""
      borderRadius=""
      bg=""
      disabled={isLoading}
      h="50px"
      justifyContent="start"
      onClick={handleClick}
      w="100%"
      _active={{}}
      _hover={{
        border: "1px",
      }}
    >
      {location_name}
    </Button>
  );
};
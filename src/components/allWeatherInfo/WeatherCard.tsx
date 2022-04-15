import { Center, Flex, Image, Text } from '@chakra-ui/react';
import { useWeatherContext } from '../../context';
import { WeatherDay } from '../../models';

export const WeatherCard = ({
  weather_state_name,
  applicable_date,
  min_temp,
  max_temp,
}: WeatherDay) => {

  const { displayTemp } = useWeatherContext();
  const display = displayTemp === 'celsius' ? 'celsius' : 'fahrenheit';
  const abbr = displayTemp === 'celsius' ? 'C' : 'F';

  return (
    <Center
      py="18px"
      px="20px"
      flexDir="column"
    >
      <Text>{applicable_date}</Text>
      <Image
        alt={weather_state_name}
        boxSize="95px"
        me="8px"
        mb="8px"
        objectFit="contain"
        src={`./src/assets/${weather_state_name.replaceAll(' ', '')}.png`}
      />
      <Flex
        w="95%"
        justify="space-between"
      >
        <Text>{max_temp[display]}°{abbr}</Text>
        <Text color="text.2">{min_temp[display]}°{abbr}</Text>
      </Flex>
    </Center>
  );
};
import { Box, Flex, Icon, Spinner, Text, VStack } from '@chakra-ui/react';
import { useWeatherContext } from '../../context';
import { WeatherDay } from '../../models';

export const WeatherDayInfo = () => {

  const { isLoading, weatherState:{weathers, city}, displayTemp } = useWeatherContext();
  const day = weathers ? weathers[0] : {} as WeatherDay;

  const display = displayTemp === 'celsius' ? 'celsius' : 'fahrenheit';
  const abbr = displayTemp === 'celsius' ? 'C' : 'F';

  return (
    <VStack
      h="50%"
      justify="space-between"
      my="10px"
    >{
      isLoading
      ?
        <Flex
          h="100%"
          align="center"
          justify="center"
        >
          <Spinner size="xl" />
        </Flex>
      :
        <>
          <Flex
            align="end"
          >
            <Text
              fontSize="144px"
              fontWeight="medium"
              lineHeight="169px"
            >
              {day.max_temp[display]}
            </Text>
            <Text
              color="text.2"
              fontSize="48px"
              fontWeight="medium"
              lineHeight="106px"
            >
              °{abbr}
            </Text>
          </Flex>
          <Text
            color="text.2"
            fontSize="36px"
            fontWeight="semibold"
            lineHeight="42px"
          >
            {day.weather_state_name}
          </Text>
          <Box w="80%">
            <Flex justify="space-between">
              <Text
                color="text.4"
                fontSize="18px"
                fontWeight="medium"
                lineHeight="21px"
              >
                Today
              </Text>
              <Text
                color="text.4"
                fontSize="18px"
                fontWeight="medium"
                lineHeight="21px"
              >
                •
              </Text>
              <Text
                color="text.4"
                fontSize="18px"
                fontWeight="medium"
                lineHeight="21px"
              >
                {day.applicable_date}
              </Text>
            </Flex>
            <Flex
              justify="center"
              my="32px"
            >
              <Icon me="15px"/>
              <Text
                color="text.4"
                fontSize="18px"
                fontWeight="bold"
                lineHeight="21px"
              >
                {city}
              </Text>
            </Flex>
          </Box>
        </>
    }</VStack>
  );
};
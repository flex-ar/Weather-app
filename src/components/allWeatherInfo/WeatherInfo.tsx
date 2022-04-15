import { Box, Flex, Heading, Icon, Spinner, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useWeatherContext } from '../../context';
import { WeatherSimpleCardInfo } from './WeatherSimpleCardInfo';

export const WeatherInfo = () => {

  const { weatherState: { weathers }, isLoading } = useWeatherContext();
  const [ day ] = weathers ?? [];
  const { wind_speed, wind_direction_compass, humidity, visibility, air_pressure } = day ?? {};

  return (
    <Box maxW="819px" mt="72px">
      <Heading
        mb="32px"
        textAlign="center" // opcional
      >
        Today’s Hightlights
      </Heading>
      <Wrap
        spacing="48px"
        align="center"
        justify="center"
      >
        <WrapItem
          alignItems="center"
          bg="bg.1"
          flexDir="column"
          h="204px"
          justifyContent="space-evenly"
          w="384px"
        >
          {
            isLoading
            ? <Spinner size="xl"/>
            : (<>
              <Text>Wind status</Text>
              <Flex align="center">
                <Text
                  fontSize="64px"
                  fontWeight="bold"
                  lineHeight="75px"
                >
                  {wind_speed}
                </Text>
                <Text
                  fontSize="36px"
                  fontWeight="medium"
                  lineHeight="42px"
                >
                  mph
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Icon me="15px"/>
                <Text>{wind_direction_compass}</Text>
              </Flex>
            </>)
          }
        </WrapItem>
        <WrapItem
          alignItems="center"
          bg="bg.1"
          flexDir="column"
          h="204px"
          justifyContent="space-evenly"
          w="384px"
        >
          {
            isLoading
            ? <Spinner size="xl"/>
            : (<>
              <Text mt="8px">Humidity</Text>
              <Flex align="center">
                <Text
                  fontSize="64px"
                  fontWeight="bold"
                  lineHeight="75px"
                >
                  {humidity}
                </Text>
                <Text
                  fontSize="36px"
                  fontWeight="medium"
                  lineHeight="42px"
                >
                  %
                </Text>
              </Flex>
              <Box>
                <Flex
                  color="text.2"
                  fontSize="16px"
                  fontWeight="bold"
                  justify="space-between"
                  >
                  <Text>0</Text>
                  <Text>50</Text>
                  <Text>100</Text>
                </Flex>
                <Box
                  borderRadius={10}
                  bg="text.1"
                  w="249px"
                  >
                  <Box
                    borderRadius={10}
                    bg="bg.4"
                    w={`${humidity}%`}
                    h="8px"
                    >
                  </Box>
                </Box>
                <Flex
                  color="text.2"
                  fontSize="16px"
                  fontWeight="bold"
                  justify="flex-end"
                >
                  %
                </Flex>
              </Box>
            </>)
          }
        </WrapItem>
        <WeatherSimpleCardInfo
          title="Visibility"
          isLoadig={isLoading}
          data={visibility}
          unity="miles"
        />
        <WeatherSimpleCardInfo
          title="Air Pressure"
          isLoadig={isLoading}
          data={air_pressure}
          unity="mb"
        />
      </Wrap>
    </Box>
  );
};
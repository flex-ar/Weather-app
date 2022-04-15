import { Box, Container } from '@chakra-ui/react';
import { ChangeTempDisplay } from './ChangeTempDisplay';
import { WeatherCardsContainer } from './WeatherCardsContainer';
import { WeatherInfo } from './WeatherInfo';

export const AllWeatherInfo = () => {
  return (
    <Container
      bg="bg.2"
      centerContent
      color="text.1"
      fontFamily="Raleway"
      maxW="100%"
      overflow="auto"
      px="100px"
    >
      <Box>
        <ChangeTempDisplay />
        <WeatherCardsContainer />
        <WeatherInfo />
      </Box>
    </Container>
  );
};

//<Flex
//  justify="center"
//  align="center"
//  h="100%"
//  w="100%"
//>
//  <Spinner size='xl'/>
//</Flex>

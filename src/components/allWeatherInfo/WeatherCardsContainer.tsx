import { Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { useWeatherContext } from '../../context';
import { WeatherCard } from './WeatherCard';

export const WeatherCardsContainer = () => {

  const { isLoading, weatherState } = useWeatherContext();
  const { weathers: weathersAll } = weatherState;
  const weatherWeek = weathersAll ? weathersAll.slice(1) : null;
  const [ tomorrow, ...weathers ] = weatherWeek ?? Array(5);

  // console.log( weathersAll )

  return (
    <Wrap
      justify="center"
      mt="52px"
      spacing="26px"
    >
      <WrapItem
        alignItems="center"
        bg="bg.1"
        h="187px"
        justifyContent="center"
        w="143px"
      >{
        isLoading
        ? <Spinner size="xl"/>
        : <WeatherCard {...{...tomorrow, applicable_date: 'Tomorrow'}}/>
      }</WrapItem>

      {
        weathers.map((day, i) => (
          <WrapItem
            alignItems="center"
            bg="bg.1"
            h="187px"
            justifyContent="center"
            key={i}
            w="143px"
          >{
            isLoading
            ? <Spinner size="xl"/>
            : <WeatherCard {...day}/>
          }</WrapItem>
        ))
      }
    </Wrap>
  );
};

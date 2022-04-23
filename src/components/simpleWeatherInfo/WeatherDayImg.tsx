import { Grid, Image, Spinner } from '@chakra-ui/react';
import background from '../../assets/Cloud-background.png';
import { useWeatherContext } from '../../context';

export const WeatherDayImg = () => {

  const { weatherState: { weathers } } = useWeatherContext();
  const day = weathers ? weathers[0] : null;

  return (
    <Grid
      h="376px"
    >
      <Image
        alt='Cloud-background'
        opacity="10%"
        gridColumn="1"
        gridRow="1"
        src={background}
        placeSelf="center"
        pos="absolute"
      />
      {
        day === null
        ?
          <Spinner
            gridColumn="1"
            gridRow="1"
            placeSelf="center"
            size="xl"
          />
        :
          <Image
            alt={day.weather_state_name}
            gridColumn="1"
            gridRow="1"
            objectFit="contain"
            placeSelf="center"
            src={`./src/assets/${day.weather_state_name.replaceAll(' ', '')}.png`}
          />
      }
    </Grid>
  );
};

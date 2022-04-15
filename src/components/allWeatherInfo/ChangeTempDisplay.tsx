import { Button, Hide, HStack } from '@chakra-ui/react';
import { useWeatherContext } from '../../context';

export const ChangeTempDisplay = () => {

  const { setDisplayTemp, isLoading } = useWeatherContext();

  const handleClick = (temp: string) => setDisplayTemp(temp);

  return (
    <Hide below="md">
      <HStack
        justify="end"
        spacing="12px"
        mt="42px"
        mb="66px"
      >
        <Button
          borderRadius="full"
          bg="text.1"
          color="text.3"
          disabled={isLoading}
          fontSize="18px"
          fontWeight="bold"
          w="40px"
          onClick={() => handleClick('celsius')}
          _active={{}}
          _hover={{}}
          >
          °C
        </Button>
        <Button
          borderRadius="full"
          bg="bg.3"
          color="text.1"
          disabled={isLoading}
          fontSize="18px"
          fontWeight="bold"
          w="40px"
          onClick={() => handleClick('fahrenheit')}
          _active={{}}
          _hover={{}}
        >
          °F
        </Button>
      </HStack>
    </Hide>
  );
};
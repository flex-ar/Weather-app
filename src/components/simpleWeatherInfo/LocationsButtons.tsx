import { Button, HStack, IconButton } from "@chakra-ui/react";
import { useWeatherContext } from "../../context";

export const LocationsButtons = () => {

  const { isLoading, setSearch } = useWeatherContext();

  return (
    <HStack
      justify="space-between"
      mt="42px"
      w="80%"
    >
      <Button
        borderRadius={0}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="bg.5"
        color="text.1"
        disabled={isLoading}
        fontWeight="medium"
        onClick={() => setSearch(true)}
        _active={{}}
        _hover={{}}
      >
        Search for places
      </Button>
      <IconButton
        aria-label="Current Location"
        borderRadius="full"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        bg="bg.5"
        disabled={isLoading}
        _active={{}}
        _hover={{}}
      />
    </HStack>
  );
};
import { Button, CloseButton, Flex, HStack, Icon, IconButton, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import { useWeatherContext } from '../../../context';
import { useLocations } from '../../../hooks';
import { SearchLocationsButtons } from './SearchLocationsButtons';

export const SearchLocations = () => {

  const { setSearch, isLoading } = useWeatherContext();
  const { isEmpty, isSearching, locations, startSearchLocations } = useLocations();
  const input = useRef<null | HTMLInputElement>(null);

  const handleClick = () => {
    const location = input.current?.value.trim().toLowerCase() ?? '';
    if (location?.length > 2) {
      startSearchLocations(location)
    };
  };

  // console.log(locations);

  return (
    <>
      <HStack
        w="80%"
        justify="end"
        mt="19px"
      >
        <CloseButton
          size="lg"
          onClick={() => setSearch(false)}
        />
      </HStack>
      <HStack
        justify="space-evenly"
        w="80%"
      >
        <Flex
          border="1px"
          borderColor="text.1"
          w="228px"
          h="48px"
          justify="start"
          align="center"
        >
          <IconButton
            aria-label="search"
            bg=""
            icon={<Icon />}
            onClick={() => input.current?.focus()}
            _active={{}}
            _hover={{}}
            _focus={{}}
          />
          <Input
            border=""
            placeholder="search location"
            ps="1px"
            ref={input}
            _focus={{}}
          />
        </Flex>
        <Button
          borderRadius="0"
          bg="#3C47E9"
          disabled={isLoading || isSearching}
          fontWeight="medium"
          h="48px"
          lineHeight="18px"
          minW="86px"
          onClick={handleClick}
          _active={{}}
          _hover={{}}
        >
          Search
        </Button>
      </HStack>
      {
        isSearching
        ? <Spinner size="xl" />
        : isEmpty
        ? <Text>Localizacion no encontrada</Text>
        : <VStack w="80%">
          {locations.map(location => (
            <SearchLocationsButtons
              key={location.location_id}
              {...location}
            />
          ))}
        </VStack>
      }
    </>
  );
};

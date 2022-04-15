import { Flex, Spinner, Text, WrapItem } from '@chakra-ui/react';

interface Prop {
  title: string
  isLoadig: boolean
  data: number
  unity: string
};

export const WeatherSimpleCardInfo = ({ title, isLoadig, data, unity }: Prop) => {
  return (
    <WrapItem
      alignItems="center"
      bg="bg.1"
      flexDir="column"
      h="159px"
      justifyContent="space-evenly"
      w="384px"
    >{
      isLoadig
      ? 
        <Spinner size="xl"/>
      : 
        <>
          <Text>{title}</Text>
            <Flex align="center">
              <Text
                fontSize="64px"
                fontWeight="bold"
                lineHeight="75px"
              >
                {data}
              </Text>
              <Text
                fontSize="36px"
                fontWeight="medium"
                lineHeight="42px"
              >
                {unity}
              </Text>
            </Flex>
        </>
    }</WrapItem>
  );
};

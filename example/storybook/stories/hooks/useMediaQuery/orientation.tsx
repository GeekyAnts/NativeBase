import React from 'react';
import {
  Text,
  useMediaQuery,
  Heading,
  VStack,
  Skeleton,
  Center,
  Stack,
  HStack,
} from 'native-base';

export const Example = () => {
  const [isLandScape, isPortrait] = useMediaQuery([
    { orientation: 'landscape' },
    { orientation: 'portrait' },
  ]);
  return (
    <Center>
      {isPortrait ? (
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          borderColor="coolGray.400"
          p="4"
        >
          <VStack flex="3" space="4">
            <Skeleton />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" />
            </HStack>
          </VStack>
        </HStack>
      ) : (
        <></>
      )}
      {isLandScape ? (
        <HStack
          rounded="lg"
          overflow="hidden"
          shadow={1}
          _light={{ backgroundColor: 'gray.50' }}
          _dark={{ backgroundColor: 'gray.700' }}
        >
          <Stack p="2" pt="3" flex="2" space={1}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text
                fontSize="xs"
                _light={{ color: 'violet.500' }}
                _dark={{ color: 'violet.300' }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontSize="xs" fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's
              high-tech industry. The city is also known for its parks and
              nightlife.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  _dark={{ color: 'warmGray.200' }}
                  fontSize="xs"
                  color="gray.500"
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </HStack>
      ) : (
        <></>
      )}
    </Center>
  );
};

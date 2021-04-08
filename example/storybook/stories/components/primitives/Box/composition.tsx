import React from 'react';
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  useColorModeValue,
} from 'native-base';
export const Composition = () => {
  return (
    <Box width={72} bg={useColorModeValue('gray.50', 'gray.700')} shadow={4}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{
              uri:
                'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="red.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}
        >
          PHOTOS
        </Center>
        <Center
          p={1}
          rounded="full"
          bg="red.500"
          boxSize={10}
          position="absolute"
          right={0}
          m={2}
          _text={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 'xs',
          }}
        >
          27 MAR
        </Center>
      </Box>
      <Stack p={4} space={4}>
        <Stack space={2}>
          <Heading size="sm">Life in the Garden City</Heading>
          <Heading
            size="xs"
            color={useColorModeValue('red.500', 'red.300')}
            fontWeight="500"
          >
            The Silicon Valley of India.
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon name="access-time" color="gray.500" size="sm" />
            <Text ml={1} color="gray.500" fontWeight="500">
              6 mins ago
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon
              name="ios-chatbubbles"
              type="Ionicons"
              color="gray.500"
              size="sm"
            />
            <Text ml={1} color="gray.500" fontWeight="500">
              39 comments
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

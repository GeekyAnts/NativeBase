import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  useColorModeValue,
} from 'native-base';
export const Example = () => {
  return (
    <Box rounded="pill" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
      <Image
        h={64}
        roundedTop="pill"
        source={{
          uri:
            'https://image.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg',
        }}
        alt="NativeBase Card"
      />
      <Stack p={4} space={2}>
        <Heading color={useColorModeValue('blueGray.700', 'blueGray.100')}>
          Adventure
        </Heading>
        <Text color={useColorModeValue('blueGray.500', 'blueGray.200')}>
          An exciting experience that is typically bold, sometimes risky,
          undertaking...
          <Text bold color={useColorModeValue('blueGray.500', 'blueGray.200')}>
            more
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};

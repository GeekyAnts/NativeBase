import React from 'react';
import { Box, Heading, Image, Text, Stack } from 'native-base';
export const CompositionCard2 = () => {
  return (
    <Box rounded="pill" w={96} shadow={4}>
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
        <Heading color="blueGray.600">Adventure</Heading>
        <Text color="blueGray.500">
          An exciting experience that is typically bold, sometimes risky,
          undertaking...
          <Text bold color="blueGray.500">
            more
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};

import React from 'react';
import { Box, Heading, Image, Text, Stack } from 'native-base';
export const Example = () => {
  return (
    <Box rounded="25" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
      <Image
        h={64}
        roundedTop="25"
        source={{
          uri:
            'https://image.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg',
        }}
        alt="NativeBase Card"
      />
      <Stack p={4} space={2}>
        <Heading
          _light={{ color: 'blueGray.700' }}
          _dark={{ color: 'blueGray.100' }}
        >
          Adventure
        </Heading>
        <Text
          _light={{ color: 'blueGray.500' }}
          _dark={{ color: 'blueGray.200' }}
        >
          An exciting experience that is typically bold, sometimes risky,
          undertaking...
          <Text
            bold
            _light={{ color: 'blueGray.500' }}
            _dark={{ color: 'blueGray.200' }}
          >
            more
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};

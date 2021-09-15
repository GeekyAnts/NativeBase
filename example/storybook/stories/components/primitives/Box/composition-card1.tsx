import React from 'react';
import { Box, Heading, Image, Text, HStack, Stack, Button } from 'native-base';
export const Example = () => {
  return (
    <Box rounded="25" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
      <Image
        roundedTop="25"
        h={56}
        source={{
          uri:
            'https://image.freepik.com/free-photo/clown-anemonefish-amphiprion-swimming-among-tentacles-its-anemone-home_211453-2.jpg',
        }}
        alt="NativeBase Card"
      />
      <Stack p={4} space={3}>
        <Heading
          _light={{ color: 'blueGray.700' }}
          _dark={{ color: 'blueGray.100' }}
        >
          Clownfish
        </Heading>
        <Text
          _light={{ color: 'blueGray.500' }}
          _dark={{ color: 'blueGray.200' }}
        >
          Bright orange with three distinctive white bars, clown anemonefish are
          among the most recognizable at all reef-dwellers.
        </Text>
        <HStack space={4}>
          <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
            SHARE
          </Button>
          <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
            LEARN MORE
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};

import React from 'react';
import { Box, Heading, Image, Text, HStack, Stack, Button } from 'native-base';
export const CompositionCard1 = () => {
  return (
    <Box rounded="pill" w={96} shadow={4}>
      <Image
        roundedTop="pill"
        h={56}
        source={{
          uri:
            'https://image.freepik.com/free-photo/clown-anemonefish-amphiprion-swimming-among-tentacles-its-anemone-home_211453-2.jpg',
        }}
        alt="NativeBase Card"
      />
      <Stack p={4} space={3}>
        <Heading color="blueGray.600">Clownfish</Heading>
        <Text color="blueGray.500">
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

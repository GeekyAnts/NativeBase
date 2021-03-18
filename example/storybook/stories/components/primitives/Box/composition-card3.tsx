import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Icon,
  HStack,
  Stack,
  Center,
} from 'native-base';
export const CompositionCard3 = () => {
  return (
    <Box rounded="pill" w={64} shadow={4}>
      <Image
        h={64}
        rounded="pill"
        source={{
          uri:
            'https://image.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg',
        }}
        alt="NativeBase Card"
      />
      <Center position="absolute" height="100%" width="100%">
        <Icon
          type="AntDesign"
          name="play"
          color="gray.200"
          size={12}
          opacity={0.8}
        />
      </Center>
      <HStack
        position="absolute"
        bottom={4}
        w={64}
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <Heading color="gray.200" size="md">
            Sacred Grove
          </Heading>
          <Text color="gray.200">Meghalaya</Text>
        </Stack>
        <Icon name="more-horizontal" type="Feather" color="white" />
      </HStack>
    </Box>
  );
};

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
import { Feather, AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    // <Box rounded="25" shadow={4} mx={{ base: 'auto', md: 0 }}>
    <Box rounded="25" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
      <Image
        h={64}
        // w={200}
        w="100%"
        rounded="25"
        source={{
          uri:
            'https://image.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg',
        }}
        alt="NativeBase Card"
      />

      <Center position="absolute" height="100%" width="100%">
        <Icon
          as={<AntDesign name="play" />}
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
        <Icon as={<Feather name="more-horizontal" />} color="white" />
      </HStack>
    </Box>
  );
};

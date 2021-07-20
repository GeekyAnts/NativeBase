import React from 'react';
import { Box, Text, Image, Heading, Stack } from 'native-base';
export const Example = () => {
  return (
    <Box
      flexDirection={{ base: 'column', md: 'row' }}
      shadow={4}
      rounded="lg"
      overflow="hidden"
    >
      <Box width={{ md: 24 }} height={{ base: 32, md: '100%' }}>
        <Image
          source={{
            uri:
              'https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/b56d1e9b-3861-4c89-995d-b8fb6240a762/nike-just-do-it.jpg',
          }}
          alt="Shoes"
        />
      </Box>
      <Stack p={3} space={2} minW={32}>
        <Text fontSize="xs" color="red.400" fontWeight="semibold">
          Just In
        </Text>
        <Stack space={1}>
          <Heading size="sm">Jordan MA2</Heading>
          <Text fontWeight="medium" color="blueGray.600">
            Older Kids' Shoe
          </Text>
          <Text fontWeight="medium" color="blueGray.600">
            2 colors
          </Text>
        </Stack>
        <Text fontSize="md" fontWeight="semibold" color="blueGray.600">
          $ 150
        </Text>
      </Stack>
    </Box>
  );
};

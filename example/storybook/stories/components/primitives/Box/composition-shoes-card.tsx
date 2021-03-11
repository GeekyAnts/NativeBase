import React from 'react';
import {
  Box,
  Stack,
  Image,
  Heading,
  Icon,
  Text,
  Flex,
  IconButton,
} from 'native-base';
export const CompositionShoesCard = () => {
  return (
    <Flex
      w={64}
      rounded={12}
      border={1}
      borderColor="blueGray.400"
      overflow="hidden"
    >
      <Box w="100%" h={40} overflow="hidden">
        <Image
          alt="shoes"
          source={{
            uri:
              'https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/b56d1e9b-3861-4c89-995d-b8fb6240a762/nike-just-do-it.jpg',
          }}
        />
      </Box>
      <Stack h={32} p={5} space={2} justifyContent="space-between">
        <Text fontSize="lg" color="blueGray.400">
          Sneakers
        </Text>
        <Stack space={1}>
          <Heading size="lg">Jordan MA2</Heading>
          <Text fontSize="xl" fontWeight="medium" color="blueGray.600">
            $ 150
          </Text>
        </Stack>
      </Stack>
      <IconButton
        position="absolute"
        mt={32}
        right={4}
        w={16}
        h={16}
        rounded="full"
        bg="orange.500"
        icon={<Icon size={6} color="white" name="heart-o" type="FontAwesome" />}
      />
      <Icon
        position="absolute"
        mt={4}
        right={4}
        name="more-horiz"
        color="white"
      />
    </Flex>
  );
};

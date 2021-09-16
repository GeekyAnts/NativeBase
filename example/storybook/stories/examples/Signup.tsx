import * as React from 'react';
import { Box, Heading, VStack, FormControl, Input, Button } from 'native-base';

export const Example = () => {
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign up
        </Button>
      </VStack>
    </Box>
  );
};

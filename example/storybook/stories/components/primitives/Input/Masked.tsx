import React from 'react';
import { Input, Button, Box } from 'native-base';

export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box alignItems="center">
      <Input
        type={show ? 'text' : 'password'}
        w="75%"
        maxW="300px"
        py="0"
        InputRightElement={
          <Button
            size="xs"
            rounded="none"
            w="1/6"
            h="full"
            onPress={handleClick}
          >
            {show ? 'Hide' : 'Show'}
          </Button>
        }
        placeholder="Password"
      />
    </Box>
  );
};

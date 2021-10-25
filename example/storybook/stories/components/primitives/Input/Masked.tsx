import React from 'react';
import { Input, Button } from 'native-base';

export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      type={show ? 'text' : 'password'}
      w={{ base: '75%', md: '25%' }}
      InputRightElement={
        <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};

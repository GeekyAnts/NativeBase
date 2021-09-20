import React from 'react';
import { Input, Button } from 'native-base';

export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      type={show ? 'text' : 'password'}
      overflow="visible"
      w={{ base: '70%', md: '25%' }}
      InputRightElement={
        <Button roundedLeft="0" onPress={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};

import React from 'react';
import { Input, Button } from 'native-base';

export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};

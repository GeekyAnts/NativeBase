import React from 'react';
import { ScaleFade, Button, Box } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let btnStr = `Click Me to ${isOpen ? 'hide' : 'show'}`;
  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>{btnStr}</Button>
      <ScaleFade in={isOpen}>
        <Box
          p="40px"
          _text={{ color: 'white' }}
          mt="4"
          bg="teal.500"
          rounded="md"
        >
          ScaleFade
        </Box>
      </ScaleFade>
    </>
  );
};

import React from 'react';
import { Fade, Button, Box } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let btnStr = `Click Me to ${isOpen ? 'hide' : 'show'}`;
  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>{btnStr}</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          mt="4"
          bg="teal.500"
          rounded="md"
          _text={{ color: 'white' }}
        >
          Fade
        </Box>
      </Fade>
    </>
  );
};

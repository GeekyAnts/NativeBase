import React from 'react';
import { Slide, Button, Box, Center, Heading } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let btnStr = `Click Me to ${isOpen ? 'hide' : 'show'}`;
  return (
    <Box width="90%" alignItems="center" justifyContent="center">
      <Heading fontSize="xs">
        This is an example to show how slider can be used.
      </Heading>
      <Button my={2} onPress={() => setIsOpen(!isOpen)}>
        {btnStr}
      </Button>
      <Center>
        The Force is strong with this one. I have you now. Look, I ain't in this
        for your revolution, and I'm not in it for you, Princess. I expect to be
        well paid. I'm in it for the money. What!? Hey, Luke! May the Force be
        with you. Remember, a Jedi can feel the Force flowing through him. All
        right. Well, take care of yourself, Han. I guess that's what you're best
        at, ain't it?
      </Center>
      <Slide in={isOpen}>
        <Box
          p="40px"
          _text={{ color: 'white' }}
          mt="4"
          bg="teal.500"
          rounded="md"
        >
          Slide
        </Box>
      </Slide>
    </Box>
  );
};

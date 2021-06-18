import React from 'react';
import { Slide, Button, Box, Center } from 'native-base';
export const Example = () => {
  const [isOpenBottom, setIsOpenBottom] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);

  let str1 = `Click Me to ${isOpenTop ? 'hide' : 'show'} Top Silder`;
  let str2 = `Click Me to ${isOpenBottom ? 'hide' : 'show'} Bottom Slider`;
  return (
    <>
      <Center my={4}>
        The Force is strong with this one. I have you now. Look, I ain't in this
        for your revolution, and I'm not in it for you, Princess. I expect to be
        well paid.
      </Center>
      <Button m={4} onPress={() => setIsOpenTop(!isOpenTop)}>
        {str1}
      </Button>
      <Button onPress={() => setIsOpenBottom(!isOpenBottom)}>
        {str2}
        {/* Click Me to {isOpenBottom ? "hide" : "show"} Bottom Slider */}
      </Button>
      <Center my={4}>
        The Force is strong with this one. I have you now. Look, I ain't in this
        for your revolution, and I'm not in it for you, Princess. I expect to be
        well paid.
      </Center>
      <Slide in={isOpenBottom}>
        <Box p={10} _text={{ color: 'white' }} bg="blue.400" rounded="md">
          I am coming from Bottom
        </Box>
      </Slide>
      <Slide in={isOpenTop} placement="top">
        <Box p={10} _text={{ color: 'white' }} bg="teal.400" rounded="md">
          I am coming from Top
        </Box>
      </Slide>
    </>
  );
};

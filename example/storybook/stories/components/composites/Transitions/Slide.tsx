import React from 'react';
import { Slide, Button, Box } from 'native-base';
export default function () {
  const [isOpenBottom, setIsOpenBottom] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);

  return (
    <>
      <Button m={4} onPress={() => setIsOpenTop(!isOpenTop)}>
        Click Me to {isOpenTop ? 'hide' : 'show'} Top Silder
      </Button>
      <Button onPress={() => setIsOpenBottom(!isOpenBottom)}>
        Click Me to {isOpenBottom ? 'hide' : 'show'} Bottom Slider
      </Button>
      <Slide in={isOpenBottom}>
        <Box p={10} color="white" bg="blue.400" rounded="md">
          I am comming from Bottom
        </Box>
      </Slide>
      <Slide in={isOpenTop} placement="top">
        <Box p={10} color="white" bg="teal.400" rounded="md">
          I am comming from Top
        </Box>
      </Slide>
    </>
  );
}

import React from 'react';
import { Collapse, Stack, Heading, Button, Text } from 'native-base';
export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const [text, setText] = React.useState(
    'This text would change when the collapse animation start'
  );
  const handleText = () =>
    setText(
      show
        ? 'Collapse is open'
        : 'This text would change when the collapse animation start'
    );
  const [color, setColor] = React.useState('emerald');
  const handleColorToggle = () =>
    setColor(color === 'emerald' ? 'indigo' : 'emerald');
  return (
    <Stack space={4} mx={8}>
      <Heading>Collapse with callbacks</Heading>
      <Text>{text}</Text>
      <Collapse
        onAnimationEnd={handleColorToggle}
        onAnimationStart={handleText}
        isOpen={show}
      >
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert.
      </Collapse>
      <Button colorScheme={color} size="sm" onPress={handleToggle}>
        <Text color="white">Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Stack>
  );
};

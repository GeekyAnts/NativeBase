import React from 'react';
import { Collapse, Stack, Heading, Button, Box } from 'native-base';
export default function () {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4}>
      <Heading>Default Collapse</Heading>
      <Collapse isOpen={show}>
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert. Gummi bears ice cream I love cake chocolate bar jujubes powder.
        Sugar plum pie jujubes jelly cotton candy dragée chocolate bar liquorice
        sugar plum. I love caramels bonbon macaroon chocolate biscuit donut
        tart.
        <Box p={8} bg="black" />
      </Collapse>
      <Button size="sm" onPress={handleToggle}>
        Show {show ? 'Less' : 'More'}
      </Button>
    </Stack>
  );
}

import React from 'react';
import { Box, Link } from 'native-base';

export const Example = () => {
  const [state, setState] = React.useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <>
      <Link onPress={toggleState} mt={4}>
        Click here to toggle the color of box.
      </Link>
      <Box h="100" w="100" mt={4} bg={state ? 'orange.300' : 'blue.300'} />
    </>
  );
};

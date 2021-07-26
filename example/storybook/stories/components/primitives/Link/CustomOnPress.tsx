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
      <Box mt={4} size={20} bg={state ? 'orange.300' : 'blue.300'} />
    </>
  );
};

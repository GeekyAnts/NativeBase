//@ts-nocheck
import React from 'react';
import { Box } from 'native-base';

export const Example = () => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Box
      width="90%"
      bg="primary.400"
      p={4}
      shadow={2}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      ref={myRef}
    >
      This is a Box
    </Box>
  );
};

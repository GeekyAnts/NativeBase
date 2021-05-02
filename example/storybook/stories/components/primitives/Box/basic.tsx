import React from 'react';
import { Box } from 'native-base';
export const Basic = () => {
  return (
    <Box
      w={'90%'}
      bg={['primary.400', 'green.400']}
      p={{ base: 9, md: 5, sm: 1 }}
      shadow={[1, 2, 9]}
      mt={[100, 300]}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      _web={{
        w: '80%',
      }}
      _ios={{
        w: '30%',
        shadow: 9,
        bg: 'pink.400',
      }}
    ></Box>
  );
};

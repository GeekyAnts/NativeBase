import React from 'react';
import { Box, Progress, Center } from 'native-base';

export const Example = () => {
  return (
    <Center w="100%">
      <Box w="90%" maxW="400">
        <Progress
          bg="coolGray.100"
          _filledTrack={{
            bg: 'lime.500',
          }}
          value={75}
          mx="4"
        />
      </Box>
    </Center>
  );
};

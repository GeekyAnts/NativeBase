import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  return (
    <Box size={200}>
      <Image
        source={{
          uri:
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="NativeBase logo"
      />
    </Box>
  );
}

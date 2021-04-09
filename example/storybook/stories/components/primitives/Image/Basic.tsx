import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  return (
    <Box size={200}>
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
      />
    </Box>
  );
}

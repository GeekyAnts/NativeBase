import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  return (
    <Box size={200}>
      <Image
        source={{
          uri: 'https://nativebase.github.io/img/native-base-icon.png',
        }}
        alt="NativeBase logo"
      />
    </Box>
  );
}

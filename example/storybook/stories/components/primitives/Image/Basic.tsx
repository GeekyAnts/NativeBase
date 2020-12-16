import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  return (
    <Box size={200}>
      <Image
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="NativeBase logo"
      />
    </Box>
  );
}

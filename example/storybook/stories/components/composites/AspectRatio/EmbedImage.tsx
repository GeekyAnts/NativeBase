import React from 'react';
import { AspectRatio, Image } from 'native-base';
export const Example = () => {
  return (
    <AspectRatio ratio={9 / 10} height={400}>
      <Image
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="nativebase tiny logo"
      />
    </AspectRatio>
  );
};

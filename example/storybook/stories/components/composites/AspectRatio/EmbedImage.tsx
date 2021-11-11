import React from 'react';
import { AspectRatio, Image } from 'native-base';
export const Example = () => {
  return (
    <AspectRatio
      ratio={{ base: 3 / 4, md: 9 / 10 }}
      height={{ base: 200, md: 400 }}
    >
      <Image
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="Picture of a Flower"
      />
    </AspectRatio>
  );
};

import React from 'react';
import { IconButton, Icon } from 'native-base';
import { Path, Circle } from 'react-native-svg';

export const Example = () => {
  return (
    <IconButton
      variant="solid"
      onPress={() => console.log('IconButton pressed')}
      icon={
        <Icon viewBox="0 0 200 200" color="blue.300" size={10} strokeWidth="10">
          <Path
            fill="blue.300"
            stroke="red.300"
            strokeWidth="10"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
          <Circle cx="100" cy="100" r="50" fill="pink.200" />
        </Icon>
      }
    />
  );
};

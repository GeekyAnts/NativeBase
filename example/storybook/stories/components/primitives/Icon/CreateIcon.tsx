import React from 'react';
import { createIcon } from 'native-base';
import { Path, Circle } from 'react-native-svg';
export const Example = () => {
  const CustomIcon = createIcon({
    viewBox: '0 0 200 200',
    // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    path: [
      <Path
        fill="blue.200"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
      <Circle cx="50" cy="50" r="50" fill="pink.200" />,
    ],
  });
  return <CustomIcon color="red.200" size={12} />;
};

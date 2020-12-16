import React from 'react';
import { createIcon, Path } from 'native-base';
export default function () {
  const CustomIcon = createIcon({
    viewBox: '0 0 200 200',
    // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    path: [
      <Path
        fill="blue"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
      <Path
        fill="blue"
        d="M 200, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
    ],
  });
  return <CustomIcon color="red.200" size={12} />;
}

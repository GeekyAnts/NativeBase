import React from 'react';
import { createIcon, SvgPath, SvgCircle } from 'native-base';
export default function () {
  const CustomIcon = createIcon({
    viewBox: '0 0 200 200',
    // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    path: [
      <SvgPath
        fill="blue.200"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
      <SvgCircle cx="50" cy="50" r="50" fill="pink.200" />,
    ],
  });
  return <CustomIcon color="red.200" size={12} />;
}

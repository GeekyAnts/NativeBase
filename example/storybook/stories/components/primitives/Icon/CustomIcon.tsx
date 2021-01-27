import React from 'react';
import { Icon } from 'native-base';
import { Rect, Path, Circle } from 'react-native-svg';
export default function () {
  return (
    <Icon viewBox="0 0 200 200" color="blue.300" size={12} strokeWidth="10">
      <Rect x="10" y="15" width="200" height="200" fill="yellow.200" />
      <Path
        fill="blue.300"
        stroke="red.300"
        strokeWidth="10"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
      <Circle cx="100" cy="100" r="50" fill="pink.200" />
    </Icon>
  );
}

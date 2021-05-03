import React from 'react';
import { Icon, MoonIcon, SunIcon, CircleIcon } from 'native-base';
import { G, Polygon } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

export default function () {
  return (
    <>
      <Icon>
        <G fill="currentColor">
          <Polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" />
        </G>
      </Icon>
      <MoonIcon m={8} />
      <CircleIcon color="red.200" />
      <SunIcon />
      <Icon color="red.500" m={8} as="A" />
      <Icon color="red.500" m={8} as={Ionicons} />
    </>
  );
}

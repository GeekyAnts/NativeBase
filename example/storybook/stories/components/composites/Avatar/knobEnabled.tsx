import React from 'react';
import { Avatar } from 'native-base';
import { color, select, number, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <Avatar
      source={{
        uri: text(
          'source',
          'https://nativebase.io/assets/img/front-page-icon.png'
        ),
      }}
      borderRadius={999}
      borderWidth={2}
      borderColor={'black'}
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      name={text('name', 'NativeBase')}
    >
      <Avatar.Badge
        bg={color('bg', 'red.200')}
        boxSize={number('badgeSize', 5, {
          range: true,
          min: 0,
          max: 40,
          step: 1,
        })}
      />
    </Avatar>
  );
}

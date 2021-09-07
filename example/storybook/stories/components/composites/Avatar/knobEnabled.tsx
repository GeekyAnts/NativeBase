import React from 'react';
import { Avatar } from 'native-base';
import { select, number, text } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <Avatar
      source={{
        uri: text(
          'source',
          'https://alpha.nativebase.io/img/native-base-icon.png'
        ),
      }}
      borderRadius={999}
      borderWidth={2}
      borderColor={'black'}
      bg="teal.600"
      size={select('size', ['sm', 'md', 'lg'], 'md')}
    >
      {text('name', 'NB')}
      <Avatar.Badge
        bg={text('bg', 'red.200')}
        boxSize={number('badgeSize', 5)}
      />
    </Avatar>
  );
};

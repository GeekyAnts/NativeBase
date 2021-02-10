import React from 'react';
import { Tag, Avatar } from 'native-base';

export default function () {
  return (
    <Tag colorScheme="emerald" size="sm" rounded={'full'}>
      <Avatar
        mr={2}
        source={{ uri: 'https://nativebase.io/assets/img/front-page-icon.png' }}
        name={'Nativebase'}
        width={6}
        height={6}
      />
      Nativebase
    </Tag>
  );
}

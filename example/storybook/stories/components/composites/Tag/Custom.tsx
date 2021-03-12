import React from 'react';
import { Tag, Avatar } from 'native-base';

export default function () {
  return (
    <Tag colorScheme="emerald" size="sm" rounded={'full'}>
      <Avatar
        mr={2}
        source={{
          uri: 'https://alpha.nativebase.io/img/nativebase-new-icon.png',
        }}
        width={6}
        height={6}
      />
      Nativebase
    </Tag>
  );
}

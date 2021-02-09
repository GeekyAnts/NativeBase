import React from 'react';
import { Tag, TagLabel, Avatar, AvatarBadge } from 'native-base';

export default function () {
  return (
    <Tag colorScheme="red" rounded={100} size="md">
      <Avatar
        mr={3}
        source={{ uri: 'https://nativebase.io/assets/img/front-page-icon.png' }}
        name={'Native Base'}
        width={10}
        height={10}
        my={1}
      >
        <AvatarBadge bg={'blue.100'} boxSize={2} />
      </Avatar>
      <TagLabel>Custom Tag</TagLabel>
    </Tag>
  );
}

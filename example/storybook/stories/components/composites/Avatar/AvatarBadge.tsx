import React from 'react';
import { Avatar, HStack, AvatarBadge } from 'native-base';

export default function () {
  return (
    <HStack>
      <Avatar
        source={{ uri: 'https://nativebase.io/assets/img/front-page-icon.png' }}
        name={'Native Base'}
      >
        <AvatarBadge bg={'red.200'} />
      </Avatar>
      <Avatar
        source={{ uri: 'https://nativebase.io/assets/img/front-page-icon.png' }}
        name={'Native Base'}
      >
        <AvatarBadge borderColor="papayawhip" bg="tomato" />
      </Avatar>
    </HStack>
  );
}

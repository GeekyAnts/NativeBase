import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <HStack space={2}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <IconButton
          size={size}
          variant="solid"
          icon={<Icon name={'menu'} color="white" size={size} />}
        />
      ))}
    </HStack>
  );
}

import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <HStack space={4}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <IconButton
          size={size}
          variant="solid"
          colorScheme="blue"
          icon={<Icon name={'menu'} size={'lg'} />}
        />
      ))}
    </HStack>
  );
}

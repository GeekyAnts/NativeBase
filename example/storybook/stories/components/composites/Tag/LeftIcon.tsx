import React from 'react';
import { Tag, TagLabel, TagLeftIcon, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag
          key={size}
          colorScheme="red"
          variant="solid"
          rounded={100}
          size={size}
        >
          <TagLeftIcon name={'menu'} type="MaterialIcons" color="white" />
          <TagLabel>Menu</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
}

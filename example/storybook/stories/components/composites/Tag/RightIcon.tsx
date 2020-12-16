import React from 'react';
import { Tag, TagLabel, TagRightIcon, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag
          colorScheme="green"
          variant="solid"
          key={size}
          rounded={100}
          size={size}
        >
          <TagLabel>Menu</TagLabel>
          <TagRightIcon name={'menu'} type="MaterialIcons" color="white" />
        </Tag>
      ))}
    </HStack>
  );
}

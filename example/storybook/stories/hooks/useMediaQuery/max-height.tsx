import React from 'react';
import { Text, useMediaQuery } from 'native-base';

export default function () {
  const [isSmaller] = useMediaQuery({ maxHeight: 512 });
  return (
    <Text>
      {isSmaller ? 'Height smaller than 512' : 'Height larger than 512'}
    </Text>
  );
}

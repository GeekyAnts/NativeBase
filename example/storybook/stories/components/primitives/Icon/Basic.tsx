import React from 'react';
import { Icon } from 'native-base';

export default function () {
  return (
    <>
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].map(
        (size) => (
          <Icon type="Ionicons" name="md-checkmark-circle" size={size} />
        )
      )}
    </>
  );
}

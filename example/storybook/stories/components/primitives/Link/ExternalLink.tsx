import React from 'react';
import { Link, Text } from 'native-base';

export const Example = () => {
  return (
    <Text mx={24}>
      NativeBase is a component library that enables devs to build universal
      design systems. It is built on top of React Native, allowing you to
      develop apps for Android, iOS and the Web.
      <Link
        href="https://nativebase.io"
        isExternal
        _text={{ color: 'blue.400' }}
        mb={-2}
      >
        {' '}
        Read More
      </Link>
    </Text>
  );
};

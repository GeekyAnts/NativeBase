import React from 'react';
import { Link } from 'native-base';

export const Example = () => {
  return (
    <Link
      href="https://nativebase.io"
      isExternal
      _external={{ bg: 'pink.100', _text: { color: 'blue.700' }, ml: 10 }}
      mt={4}
    >
      NativeBase
    </Link>
  );
};

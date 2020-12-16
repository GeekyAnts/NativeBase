import React from 'react';
import { Button } from 'native-base';

export default function () {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Button size="sm" colorScheme="gray" variant={'solid'} ref={myRef}>
      Button
    </Button>
  );
}

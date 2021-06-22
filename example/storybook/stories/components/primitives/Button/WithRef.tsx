import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Button size="sm" variant={'solid'} ref={myRef}>
      BUTTON
    </Button>
  );
};

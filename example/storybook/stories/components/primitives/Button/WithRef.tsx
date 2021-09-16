import React from 'react';
import { Button } from 'native-base';
import { Platform } from 'react-native';

export const Example = () => {
  const myRef = React.useRef({});

  React.useEffect(() => {
    const styleObj = { borderWidth: 10, opacity: 0.5, borderRadius: 10 };
    if (Platform.OS === 'web') {
      myRef?.current?.setNativeProps({ style: styleObj });
    } else {
      myRef?.current?.setNativeProps({ styleObj });
    }
  }, [myRef]);
  return (
    <Button size="sm" variant={'solid'} ref={myRef}>
      BUTTON
    </Button>
  );
};

import React from 'react';
import { Button } from 'native-base';
import { Platform } from 'react-native';

export const Example = () => {
  const myRef = React.useRef({});

  React.useEffect(() => {
    const styleObj = {
      backgroundColor: '#facc15',
      borderColor: '#CA8A04',
      borderWidth: '1',
      borderRadius: '4',
    };
    if (Platform.OS === 'web') {
      //@ts-ignore
      myRef?.current?.setNativeProps({ style: styleObj });
    } else {
      //@ts-ignore
      myRef?.current?.setNativeProps({ styleObj });
    }
  }, [myRef]);
  return (
    <Button
      size="sm"
      variant={'solid'}
      _text={{ color: '#1F2937' }}
      ref={myRef}
      px="3"
    >
      Send
    </Button>
  );
};

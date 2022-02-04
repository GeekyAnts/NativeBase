import React from 'react';
import { Button, Box } from 'native-base';

export const Example = () => {
  const myRef = React.useRef({});

  React.useEffect(() => {
    const styleObj = {
      backgroundColor: '#facc15',
      borderColor: '#CA8A04',
      borderWidth: 1,
      borderRadius: 4,
    };

    //@ts-ignore
    myRef?.current?.setNativeProps({ style: styleObj });
  }, [myRef]);
  return (
    <Box alignItems="center">
      <Button
        size="sm"
        variant={'solid'}
        _text={{ color: '#1F2937' }}
        ref={myRef}
        px="3"
      >
        Send
      </Button>
    </Box>
  );
};

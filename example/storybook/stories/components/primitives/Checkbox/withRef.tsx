import React from 'react';
import { Checkbox, Icon, Box } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export const Example = () => {
  const myRef = React.useRef();
  const [bg, setBg] = React.useState('#fa000050');
  React.useEffect(() => {
    const styleObj = {
      backgroundColor: bg,
    };
    if (Platform.OS !== 'web') {
      // @ts-ignore
      myRef?.current?.setNativeProps({
        style: styleObj,
      });
    } else {
      // @ts-ignore
      myRef?.current?.setNativeProps({ style: styleObj });
    }
  }, [myRef, bg]);
  return (
    <Box alignItems="flex-start">
      <Checkbox
        value="success"
        colorScheme="success"
        icon={<Icon as={MaterialCommunityIcons} name="bullseye" opacity={1} />}
        wrapperRef={myRef}
        onChange={(state) => {
          if (state) {
            setBg('#00de0050');
          } else {
            setBg('#fa000050');
          }
        }}
      >
        Archery
      </Checkbox>
    </Box>
  );
};

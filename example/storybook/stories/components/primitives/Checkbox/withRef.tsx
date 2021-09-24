import React from 'react';
import { Checkbox, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export const Example = () => {
  const myRef = React.useRef({});
  return (
    <Checkbox
      value="success"
      colorScheme="success"
      icon={<Icon as={MaterialCommunityIcons} name="bullseye" opacity={1} />}
      ref={myRef}
      onChange={(state) => {
        if (state) {
          if (Platform.OS !== 'web')
            myRef?.current.setNativeProps({ backgroundColor: '#00de0050' });
        } else {
          if (Platform.OS !== 'web')
            myRef?.current.setNativeProps({
              backgroundColor: '#fa000050',
            });
        }
      }}
    >
      Archery
    </Checkbox>
  );
};

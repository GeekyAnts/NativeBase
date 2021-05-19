import React from 'react';
import { Checkbox, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Example = () => {
  const myRef = React.useRef({});
  return (
    <Checkbox
      value="success"
      colorScheme="success"
      icon={
        <Icon as={<MaterialCommunityIcons name="bullseye" />} opacity={1} />
      }
      ref={myRef}
      onChange={(state) => {
        if (state)
          myRef?.current.setNativeProps({ backgroundColor: '#00de0050' });
        else
          myRef?.current.setNativeProps({
            backgroundColor: '#fa000050',
          });
      }}
    >
      Label
    </Checkbox>
  );
};

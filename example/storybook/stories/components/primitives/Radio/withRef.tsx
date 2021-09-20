import React from 'react';
import { Radio } from 'native-base';
import { Platform } from 'react-native';

export const Example = () => {
  const myRef = React.useRef({});

  return (
    <Radio.Group
      name="exampleGroup"
      colorScheme="success"
      accessibilityLabel="pick an option"
      onChange={(value) => {
        if (value === '2') {
          if (Platform.OS !== 'web')
            myRef?.current?.setNativeProps({ backgroundColor: '#00de0050' });
        } else {
          if (Platform.OS !== 'web')
            myRef?.current?.setNativeProps({
              backgroundColor: '#fa000050',
            });
        }
      }}
    >
      <Radio colorScheme="success" value="1" my={1}>
        Wrong
      </Radio>
      <Radio colorScheme="success" ref={myRef} value="2" my={1}>
        Right
      </Radio>
    </Radio.Group>
  );
};

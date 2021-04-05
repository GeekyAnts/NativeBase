import React from 'react';
import { Radio, Icon, Text } from 'native-base';

export default function () {
  const myRef: any = React.useRef({});

  return (
    <Radio.Group
      name="exampleGroup"
      colorScheme="success"
      onChange={(value) => {
        if (value === '2')
          myRef?.current?.setNativeProps({ backgroundColor: '#00de0050' });
        else
          myRef?.current?.setNativeProps({
            backgroundColor: '#fa000050',
          });
      }}
    >
      <Radio
        colorScheme="success"
        icon={
          <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
        }
        value="1"
        my={1}
      >
        <Text mx={1}>Wrong</Text>
      </Radio>
      <Radio
        colorScheme="success"
        icon={
          <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
        }
        ref={myRef}
        value="2"
        my={1}
      >
        <Text mx={1}>Right</Text>
      </Radio>
    </Radio.Group>
  );
}

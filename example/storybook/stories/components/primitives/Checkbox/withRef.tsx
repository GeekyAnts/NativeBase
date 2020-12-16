import React from 'react';
import { Checkbox, Icon } from 'native-base';

export default function () {
  const myRef: any = React.useRef({});
  return (
    <Checkbox
      value="success"
      colorScheme="success"
      icon={<Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />}
      ref={myRef}
      onChange={(_, state) => {
        if (state)
          myRef?.current.setNativeProps({ backgroundColor: '#00de0050' });
        else
          myRef?.current.setNativeProps({
            backgroundColor: '#fa000050',
          });
      }}
    >
      {' '}
      label
    </Checkbox>
  );
}

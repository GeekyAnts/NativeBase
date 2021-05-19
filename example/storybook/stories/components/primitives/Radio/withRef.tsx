import React from 'react';
import { Radio } from 'native-base';

export const Example = () => {
  const myRef = React.useRef({});

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
      <Radio colorScheme="success" value="1" my={1}>
        Wrong
      </Radio>
      <Radio colorScheme="success" ref={myRef} value="2" my={1}>
        Right
      </Radio>
    </Radio.Group>
  );
};

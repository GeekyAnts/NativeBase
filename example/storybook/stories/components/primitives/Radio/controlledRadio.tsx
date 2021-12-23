import React from 'react';
import { Radio } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('one');
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log('ref here', ref.current);
    // ref.current.setNativeProps({
    //   backgroundColor: 'red',
    // });
    // ref.current.setNativeProps({
    //   backgroundColor: 'red',
    // });
    ref.current.focus();
  }, []);
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio value="one" my={1} bg="blue.200">
        One
      </Radio>
      <Radio value="two" my={1} bg="red.200" ref={ref}>
        Two
      </Radio>
    </Radio.Group>
  );
};

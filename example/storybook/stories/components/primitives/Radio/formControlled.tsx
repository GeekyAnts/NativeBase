import React from 'react';
import { Container, FormControl, Radio, WarningOutlineIcon } from 'native-base';

export const Example = () => {
  const [groupValue, setGroupValue] = React.useState('1');
  return (
    <Container>
      <FormControl isInvalid>
        <FormControl.Label _text={{ fontSize: 'lg', bold: true }}>
          Select Prize
        </FormControl.Label>
        <Radio.Group
          name="exampleGroup"
          accessibilityLabel="select prize"
          defaultValue={groupValue}
          onChange={(value) => {
            setGroupValue(value || '');
          }}
        >
          <Radio value="1" my="1">
            First
          </Radio>
          <Radio value="2" my="1">
            Second
          </Radio>
          <Radio value="3" my="1">
            Third
          </Radio>
        </Radio.Group>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          You must select a Prize.
        </FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
};

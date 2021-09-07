import React from 'react';
import { Container, FormControl, Radio, WarningIcon } from 'native-base';

export const Example = () => {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select Prize</FormControl.Label>
        <Radio.Group name="exampleGroup" accessibilityLabel="select prize">
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
        <FormControl.ErrorMessage leftIcon={<WarningIcon size="xs" />}>
          You must select a Prize.
        </FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
};

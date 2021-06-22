import React from 'react';
import { Container, FormControl, Radio } from 'native-base';

export const Example = () => {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select One</FormControl.Label>
        <Radio.Group defaultValue="1" name="exampleGroup">
          <Radio value="1" my={1}>
            First
          </Radio>
          <Radio value="2" my={1}>
            Second
          </Radio>
          <Radio value="3" my={1}>
            Third
          </Radio>
        </Radio.Group>
        <FormControl.HelperText my={1}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
};

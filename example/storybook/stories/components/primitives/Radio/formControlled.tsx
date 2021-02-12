import React from 'react';
import { Container, FormControl, Radio, Text } from 'native-base';

export default function () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select One</FormControl.Label>
        <Radio.Group defaultValue="1" name="exampleGroup">
          <Radio value="1">
            <Text mx={2}>First</Text>
          </Radio>
          <Radio value="2">
            <Text mx={2}>Second</Text>
          </Radio>
          <Radio value="3">
            <Text mx={2}>Third</Text>
          </Radio>
        </Radio.Group>
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
}

import React from 'react';
import { Container, FormControl, Radio, RadioGroup, Text } from 'native-base';

export default function () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select One</FormControl.Label>
        <RadioGroup defaultValue="1" name="exampleGroup">
          <Radio value="1">
            <Text mx={2}>First</Text>
          </Radio>
          <Radio value="2">
            <Text mx={2}>Second</Text>
          </Radio>
          <Radio value="3">
            <Text mx={2}>Third</Text>
          </Radio>
        </RadioGroup>
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
}

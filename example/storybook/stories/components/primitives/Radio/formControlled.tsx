import React from 'react';
import {
  Radio,
  RadioGroup,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
} from 'native-base';

export default function () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormLabel>Select One</FormLabel>
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
        <FormHelperText>We'll keep this between us.</FormHelperText>
        <FormErrorMessage>Something is wrong.</FormErrorMessage>
      </FormControl>
    </Container>
  );
}

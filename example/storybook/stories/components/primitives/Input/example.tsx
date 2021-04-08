import React from 'react';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Center,
  Heading,
  FormControl,
  Button,
  Icon,
} from 'native-base';

export const DefaultInput = () => {
  return <Input mx={3} placeholder="Default Input" />;
};
export const SizeInput = () => {
  return (
    <Stack space={4} w="90%">
      <Center>
        <Heading>Input Sizes</Heading>
      </Center>
      <Input size="xs" placeholder="xs Input" />
      <Input size="sm" placeholder="sm Input" />
      <Input size="md" placeholder="md Input" />
      <Input size="lg" placeholder="lg Input" />
      <Input size="xl" placeholder="xl Input" />
      <Input size="2xl" placeholder="2xl Input" />
    </Stack>
  );
};
export const VariantInput = () => {
  return (
    <Stack space={4} w="80%">
      <Center>
        <Heading>Input Variants</Heading>
      </Center>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="Round" />
    </Stack>
  );
};
export const InputAddons = () => {
  return (
    <Stack alignItems="center" mx={3}>
      <InputGroup>
        <InputLeftAddon children={'https://'} />
        <Input placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
export const InputElements = () => {
  return (
    <Input
      InputLeftElement={
        <Icon name="phone" size="md" type="MaterialIcons" m={2} color="black" />
      }
      InputRightElement={
        <Icon
          name="person"
          size="md"
          type="MaterialIcons"
          m={2}
          color="black"
        />
      }
      placeholder="Left and Right InputElement"
    />
  );
};
export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};
export const ControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Input
      mx={3}
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
export const FormControlled = () => {
  return (
    <FormControl isRequired isInvalid p={2}>
      <Stack mx={4}>
        <FormControl.Label>Form Controlled Input</FormControl.Label>
        <Input
          placeholder="FormControl is providing me isInvalid prop"
          my={2}
        />
        <FormControl.HelperText>I am a Helper text 😊</FormControl.HelperText>
        <FormControl.ErrorMessage>
          I'll only appear when FormControl have isInvalid props.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};

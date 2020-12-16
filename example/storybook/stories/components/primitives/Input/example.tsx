import React from 'react';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
  Center,
  Heading,
  Button,
  Icon,
} from 'native-base';

export const DefaultInput = () => {
  return <Input placeholder="Default Input" />;
};
export const SizeInput = () => {
  return (
    <Stack alignItems="center" space={4}>
      <Center>
        <Heading>Size Input</Heading>
      </Center>
      <Input w="90%" size="xs" placeholder="xs Input" />
      <Input w="90%" size="sm" placeholder="sm Input" />
      <Input w="90%" size="md" placeholder="md Input" />
      <Input w="90%" size="lg" placeholder="lg Input" />
      <Input w="90%" size="xl" placeholder="xl Input" />
      <Input w="90%" size="2xl" placeholder="2xl Input" />
    </Stack>
  );
};
export const VariantInput = () => {
  return (
    <Stack space={4}>
      <Center>
        <Heading>Input Variants</Heading>
      </Center>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="round" />
    </Stack>
  );
};
export const InputAddons = () => {
  return (
    <Stack space={4}>
      <InputGroup>
        <InputLeftAddon children={<Text>https://</Text>} />
        <Input w="70%" placeholder="nativebase" />
        <InputRightAddon children={<Text>.io</Text>} />
      </InputGroup>
    </Stack>
  );
};
export const InputElements = () => {
  return (
    <Input
      w="90%"
      InputLeftElement={
        <Icon name="phone" fontSize="xl" type="MaterialIcons" />
      }
      InputRightElement={
        <Icon name="person" fontSize="xl" type="MaterialIcons" />
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
      w="70%"
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Button ml={1} onPress={handleClick}>
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
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
export const FocusErrorBorderColor = () => {
  return (
    <Stack space={4}>
      <Input
        placeholder="Here is a sample placeholder"
        focusBorderColor="green"
      />
      <Input
        placeholder="Here is a sample placeholder"
        focusBorderColor="pink"
      />
      <Input placeholder="Here is a sample placeholder" isInvalid />
      <Input
        placeholder="Here is a sample placeholder"
        isInvalid
        errorBorderColor="yellow"
        errorMessage="This is an Error Message"
      />
    </Stack>
  );
};

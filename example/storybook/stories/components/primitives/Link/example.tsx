import React from 'react';
import { Heading, Link, Box, Text, Center } from 'native-base';

export const DefaultLink = () => {
  return (
    <Box>
      <Heading>This is default Link</Heading>
      <Center>
        <Link mt={4} fontSize="xl" href="https://nativebase.io">
          Default Link
        </Link>
      </Center>
    </Box>
  );
};
export const ExternalLink = () => {
  return (
    <Box>
      <Heading>External Link</Heading>
      <Center>
        <Link
          _text={{ color: 'blue.700' }}
          href="https://nativebase.io"
          isExternal
          mt={4}
        >
          https://nativebase.io
        </Link>
      </Center>
    </Box>
  );
};

export const CustomOnClick = () => {
  const [state, setState] = React.useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <Center>
      <Heading size="sm">Custom onClick Functionality</Heading>
      <Link onClick={toggleState} mt={4}>
        Click here to toggle the color of box.
      </Link>
      <Box h="100" w="100" mt={4} bg={state ? 'orange.300' : 'blue.300'} />
    </Center>
  );
};
export const CompositeLink = () => {
  return (
    <Box w="85%">
      <Center>
        <Heading size="sm">Composite Link Example</Heading>
        <Link
          href="https://nativebase.io"
          _hover={{ bg: 'primary.100' }}
          justifyContent="center"
          alignItems="center"
          isExternal
          mt={4}
          mx={4}
        >
          <Box p={4} bg="seagreen">
            <Text color="white" fontSize={16}>
              Box
            </Text>
          </Box>
          <Text px={2}>Clicking anywhere will trigger the link</Text>
          <Box p={4} bg="blue.300">
            <Text color="white" fontSize={16}>
              Box
            </Text>
          </Box>
        </Link>
      </Center>
    </Box>
  );
};

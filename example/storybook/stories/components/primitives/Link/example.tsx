import React from 'react';
import { Heading, Link, View, Text, Box } from 'native-base';

export const DefaultLink = () => {
  return (
    <View>
      <Heading>This is default Link</Heading>
      <Link mt={4} fontSize="xl">
        Default Link
      </Link>
    </View>
  );
};
export const ExternalLink = () => {
  return (
    <View>
      <Heading>External Link</Heading>
      <Link
        _text={{ color: 'blue.700' }}
        href="https://nativebase.io"
        isExternal
        mt={4}
      >
        https://nativebase.io
      </Link>
    </View>
  );
};
export const StyledLink = () => {
  return (
    <View>
      <Heading>Link without underline</Heading>
      <Link isUnderlined={false} mt={4}>
        www.google.com
      </Link>
    </View>
  );
};
export const CustomOnClick = () => {
  const [state, setState] = React.useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <View>
      <Heading>Custom onClick Functionality</Heading>
      <Link onClick={toggleState} mt={4}>
        Click here to toggle the color of box.
      </Link>
      <Box h="100" w="100" bg={state ? 'orange.300' : 'blue.300'} />
    </View>
  );
};
export const CompositeLink = () => {
  return (
    <View>
      <Heading>Composite Link Example</Heading>
      <Link
        href="https://nativebase.io"
        _hover={{ bg: 'primary.100' }}
        isExternal
        mt={4}
      >
        <Box my={3} p={8} bg="seagreen">
          <Text color="white" fontSize={16}>
            Box
          </Text>
        </Box>
        Clicking anywhere will trigger the link
        <Box my={3} p={8} bg="blue.300">
          <Text color="white" fontSize={16}>
            Box
          </Text>
        </Box>
      </Link>
    </View>
  );
};

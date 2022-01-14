import React from 'react';
import {
  Slide,
  Button,
  Alert,
  VStack,
  Heading,
  Divider,
  Center,
  Text,
} from 'native-base';
export const Example = () => {
  const [isOpenBottom, setIsOpenBottom] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);

  const str1 = `${isOpenTop ? 'Hide' : 'Show'}`;
  const str2 = `${isOpenBottom ? 'Hide' : 'Show'}`;
  return (
    <>
      <Slide in={isOpenBottom} placement="bottom">
        <Alert justifyContent="center" mx="4" mt="auto" mb="4" status="success">
          <Alert.Icon />
          <Text
            // _light={{ color: 'success.600' }}
            // _dark={{ color: 'success.100' }}
            color="success.600"
            fontWeight="medium"
          >
            Order placed successfully!
          </Text>
        </Alert>
      </Slide>
      <Slide in={isOpenTop} placement="top">
        <Alert justifyContent="center" mx="4" mt="4" status="error">
          <Alert.Icon />

          <Text color="error.600" fontWeight="medium">
            No Internet Connection
          </Text>
        </Alert>
      </Slide>

      <VStack space={2.5} w={{ base: '50%', md: '25%' }} alignItems="center">
        <Center w="100%">
          <Heading textAlign="center" size="md" mb={4}>
            Top
          </Heading>
          <Button w="100" onPress={() => setIsOpenTop(!isOpenTop)} mb={5}>
            {str1}
          </Button>
          <Divider />
        </Center>
        <Center w="100%">
          <Heading textAlign="center" size="md" mb={4}>
            Bottom
          </Heading>
          <Button w="100" onPress={() => setIsOpenBottom(!isOpenBottom)}>
            {str2}
            {/* Click Me to {isOpenBottom ? "hide" : "show"} Bottom Slider */}
          </Button>
        </Center>
      </VStack>
    </>
  );
};

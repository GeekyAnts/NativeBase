import React from 'react';
import { Slide, Button, Alert, VStack, Heading, Divider } from 'native-base';
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
          <Alert.Description
            _text={{
              _light: { color: 'success.600' },
              _dark: { color: 'success.100' },
              fontWeight: 'medium',
            }}
          >
            Order placed successfully!
          </Alert.Description>
        </Alert>
      </Slide>
      <Slide in={isOpenTop} placement="top">
        <Alert justifyContent="center" mx="4" mt="4" status="error">
          <Alert.Icon />
          <Alert.Description
            _text={{
              _light: { color: 'error.600' },
              _dark: { color: 'error.100' },
              fontWeight: 'medium',
            }}
          >
            No Internet Connection
          </Alert.Description>
        </Alert>
      </Slide>
      <VStack space={5} w="90%">
        <Heading>Top</Heading>
        <Button alignSelf="flex-start" onPress={() => setIsOpenTop(!isOpenTop)}>
          {str1}
        </Button>
        <Divider />
        <Heading>Bottom</Heading>
        <Button
          alignSelf="flex-start"
          onPress={() => setIsOpenBottom(!isOpenBottom)}
        >
          {str2}
          {/* Click Me to {isOpenBottom ? "hide" : "show"} Bottom Slider */}
        </Button>
      </VStack>
    </>
  );
};

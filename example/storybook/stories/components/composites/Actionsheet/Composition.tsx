import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  HStack,
  Box,
  VStack,
} from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <VStack space={2} width="100%">
            <HStack width="100%" justifyContent="space-around">
              <Box>😁</Box>
              <Box>😍</Box>
              <Box>😎</Box>
            </HStack>
            <VStack justifyContent="flex-start" width="100%" space={2}>
              <Actionsheet.Item>Reply</Actionsheet.Item>
              <Actionsheet.Item>Copy Text</Actionsheet.Item>
              <Actionsheet.Item>Profile</Actionsheet.Item>
              <Actionsheet.Item>Mark Read</Actionsheet.Item>
            </VStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

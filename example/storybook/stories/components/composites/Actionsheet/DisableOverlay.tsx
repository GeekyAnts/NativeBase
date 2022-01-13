import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  Box,
  Text,
  Center,
} from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}

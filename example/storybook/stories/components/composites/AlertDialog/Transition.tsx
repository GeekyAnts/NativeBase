import React from 'react';
import { AlertDialog, Button, Center, Input } from 'native-base';
import type { TouchableOpacity } from 'react-native';

export default function () {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<TouchableOpacity>(null);
  return (
    <Center>
      <AlertDialog
        motionPreset="slide"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialog.Content>
          <AlertDialog.Header _text={{ fontSize: 'lg', fontWeight: 'bold' }}>
            Discard Changes?
          </AlertDialog.Header>
          <AlertDialog.Body>
            Please type Confirm to discard your changes.
            <Input
              placeholder="Confirm"
              ref={cancelRef}
              variant="underlined"
              mt={3}
            />
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button onPress={onClose}>Submit</Button>
            <Button onPress={onClose} colorScheme="red" ml={3}>
              Cancel
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
    </Center>
  );
}

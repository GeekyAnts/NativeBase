import React from 'react';
import { AlertDialog, Button, Center, Input } from 'native-base';
import type { TouchableOpacity } from 'react-native';

export const Example = () => {
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
            <Button.Group variant="ghost" space={2}>
              <Button onPress={onClose}>SUBMIT</Button>
              <Button colorScheme="red" onPress={onClose}>
                CANCEL
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
    </Center>
  );
};

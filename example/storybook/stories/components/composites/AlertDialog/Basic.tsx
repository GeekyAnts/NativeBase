import React from 'react';
import { AlertDialog, Button, Center } from 'native-base';
import type { TouchableOpacity } from 'react-native';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<TouchableOpacity>(null);
  return (
    <Center>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Delete Customer
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.Header _text={{ fontSize: 'lg', fontWeight: 'bold' }}>
            Delete Customer
          </AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure? You can't undo this action afterwards.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={onClose} ref={cancelRef}>
                CANCEL
              </Button>
              <Button colorScheme="red" onPress={onClose}>
                DELETE
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

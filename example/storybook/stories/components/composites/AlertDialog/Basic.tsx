import React from 'react';
import { AlertDialog, Button, ButtonGroup, Center } from 'native-base';
import type { TouchableOpacity } from 'react-native';

export default function () {
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
        motionPreset="slide"
      >
        <AlertDialog.Content>
          <AlertDialog.Header _text={{ fontSize: 'lg', fontWeight: 'bold' }}>
            Delete Customer
          </AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure? You can't undo this action afterwards.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <ButtonGroup variant="ghost" space={2}>
              <Button onPress={onClose}>CANCEL</Button>
              <Button colorScheme="red" onPress={onClose}>
                DELETE
              </Button>
            </ButtonGroup>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

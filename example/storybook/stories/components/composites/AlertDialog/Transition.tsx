import React from 'react';
import { AlertDialog, Button, Center } from 'native-base';
import type { TouchableOpacity } from 'react-native';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<TouchableOpacity>(null);
  return (
    <Center>
      <AlertDialog
        height="100%"
        // @ts-ignore
        animationPreset="slide"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Discard Changes?</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                colorScheme="blueGray"
                variant="unstyled"
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Discard
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
    </Center>
  );
};

import React from 'react';
import { Modal, Button, Input, VStack, Text } from 'native-base';

export function Example() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} avoidKeyboard>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Modal in keyboardAvoidView</Modal.Header>
          <Modal.Body>
            Try typing something in the Input.
            <Input mt={4} placeholder="Click here..." />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme="secondary"
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={2}>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
        <Text>
          Open modal and focus on the input element to see the effect.
        </Text>
      </VStack>
    </>
  );
}

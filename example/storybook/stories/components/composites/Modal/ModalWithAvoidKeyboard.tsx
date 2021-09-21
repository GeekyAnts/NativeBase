import React from 'react';
import { Modal, Button, Input, VStack, Text, FormControl } from 'native-base';

export function Example() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            Enter email address and we'll send a link to reset your password.
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">
        <Button
          w="104"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
        <Text textAlign="center">
          Open modal and focus on the input element to see the effect.
        </Text>
      </VStack>
    </>
  );
}

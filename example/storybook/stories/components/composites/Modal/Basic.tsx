import React from 'react';
import { Modal, Button, Center, Input } from 'native-base';

export default function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Modal
        accessibilityLabel="this is a simple modal"
        isOpen={modalVisible}
        onClose={setModalVisible}
        overlayVisible={true}
        size="md"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '2xl', fontWeight: 'bold' }}>
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa delectus!
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Done
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
      </Center>
    </>
  );
}

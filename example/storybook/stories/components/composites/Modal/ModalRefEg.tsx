import React from 'react';
import { Modal, Button, Input } from 'native-base';

export default function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '4xl', fontWeight: 'bold' }}>
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} ref={initialRef} placeholder="First name" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        Open Modal
      </Button>
      <Input mt={4} ref={finalRef} placeholder="I'll receive focus on close" />
    </>
  );
}

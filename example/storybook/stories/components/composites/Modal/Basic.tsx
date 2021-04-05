import React from 'react';
import { Modal, Button, Center, ButtonGroup } from 'native-base';

export default function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Modal
        accessibilityLabel="this is a simple modal"
        isOpen={modalVisible}
        onClose={setModalVisible}
        overlayVisible={true}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>Modal body text</Modal.Body>
          <Modal.Footer>
            <ButtonGroup variant="ghost" spacing={2}>
              <Button>ACTION 1</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                ACTION 2
              </Button>
            </ButtonGroup>
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

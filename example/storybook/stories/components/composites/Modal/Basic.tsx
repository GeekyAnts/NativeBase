import React from 'react';
import { Modal, Button, Center } from 'native-base';

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
          <Modal.Header>Cookie Policy</Modal.Header>
          <Modal.Body>
            We use our own and third-party cookies and other tracking
            technologies, by continuing to browse the website, you accept our
            use of cookies and tracking technologies.
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>LEARN MORE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                ACCEPT
              </Button>
            </Button.Group>
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

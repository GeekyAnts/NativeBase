import React from 'react';
import { Modal, Button, Input, ButtonGroup } from 'native-base';

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
          <Modal.Header>Want to set focus somewhere?</Modal.Header>
          <Modal.Body>
            The below input will get focus upon opening of the Modal
            <Input
              mt={4}
              ref={initialRef}
              placeholder="I'll recieve focus on Modal's opening"
            />
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup variant="ghost" spacing={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme="secondary"
              >
                CLOSE
              </Button>
            </ButtonGroup>
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

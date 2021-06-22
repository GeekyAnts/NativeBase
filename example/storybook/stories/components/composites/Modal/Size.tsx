// @ts-nocheck
import React from 'react';
import { Modal, Button, Stack } from 'native-base';

export function Example() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('md');

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme="muted"
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Stack direction={{ base: 'column', md: 'row' }} space={2}>
        {['sm', 'md', 'lg', 'full'].map((size) => {
          return (
            <Button
              onPress={() => handleSizeClick(size)}
              key={size}
            >{`Open ${size} Modal`}</Button>
          );
        })}
      </Stack>
    </>
  );
}

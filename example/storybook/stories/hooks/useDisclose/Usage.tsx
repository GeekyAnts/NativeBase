import React from 'react';
import { Modal, Button, Input, useDisclose } from 'native-base';

export const Example = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header fontSize="4xl" fontWeight="bold">
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button onPress={onClose}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={onOpen}>Open Modal</Button>
    </>
  );
};

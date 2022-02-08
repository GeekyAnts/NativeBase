//@ts-nocheck
import React from 'react';
import { Button, Modal, Stack, FormControl, Input } from 'native-base';
import { useState } from 'react';

export const Example = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} space={2}>
        <Button onPress={() => openModal('top')}>Top</Button>
        <Button onPress={() => openModal('bottom')}>Bottom</Button>
        <Button onPress={() => openModal('center')}>Center</Button>
        <Button onPress={() => openModal('left')}>Left</Button>
        <Button onPress={() => openModal('right')}>Right</Button>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setOpen(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
};

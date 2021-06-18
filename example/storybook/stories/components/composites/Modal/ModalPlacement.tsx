//@ts-nocheck
import React from 'react';
import { Button, Modal, Stack } from 'native-base';
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
      <Modal isOpen={open} onClose={() => setOpen(false)} mt={12}>
        <Modal.Content maxWidth="400px" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>LEARN MORE</Button>
              <Button
                onPress={() => {
                  setOpen(false);
                }}
              >
                ACCEPT
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

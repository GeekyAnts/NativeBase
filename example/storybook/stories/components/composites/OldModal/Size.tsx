import React from 'react';
import { Modal, Button, Center, Input, ButtonGroup } from 'native-base';

export default function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('md');

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        size={size}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontSize: '2xl', fontWeight: 'bold' }}>
            Hey There! Tell us about yourself.
          </Modal.Header>
          <Modal.Body>
            Just a one liner would work for us.
            <Input mt={4} placeholder="Something about you..." />
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup variant="ghost" space={2}>
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
      <Center>
        <Button
          onPress={() => handleSizeClick('sm')}
          key={'sm'}
          m={4}
        >{`Open ${'sm'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('md')}
          key={'md'}
          m={4}
        >{`Open ${'md'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('lg')}
          key={'lg'}
          m={4}
        >{`Open ${'lg'} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick('full')}
          key={'full'}
          m={4}
        >{`Open ${'full'} Modal`}</Button>
      </Center>
    </>
  );
}

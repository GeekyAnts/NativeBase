import React from 'react';
import { Box, Button, Drawer, Text } from 'native-base';
import { useState } from 'react';

const Basic = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Drawer isOpen={showModal} onClose={() => setShowModal(false)}>
        <Box display="flex" h="100%" bg="red.200"></Box>
      </Drawer>
    </>
  );
};

export default Basic;

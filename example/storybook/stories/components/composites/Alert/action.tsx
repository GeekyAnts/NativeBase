import React from 'react';
import {
  Alert,
  Collapse,
  Button,
  IconButton,
  Box,
  CloseIcon,
} from 'native-base';

export function Example() {
  const [show, setShow] = React.useState(true);
  return (
    <Box w="100%">
      <Collapse isOpen={show}>
        <Alert
          status="error"
          action={
            <IconButton
              icon={<CloseIcon color="red.400" size="xs" />}
              onPress={() => setShow(false)}
            />
          }
          actionProps={{ alignSelf: 'center' }}
        >
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>description goes here</Alert.Description>
        </Alert>
      </Collapse>
      <Button size={'sm'} onPress={() => setShow(true)} my={2} mx="auto">
        Re-Open
      </Button>
    </Box>
  );
}

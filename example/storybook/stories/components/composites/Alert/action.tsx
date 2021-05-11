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
  const handleToggle = (val: boolean) => setShow(val);
  return (
    <Box w="90%">
      <Collapse isOpen={show}>
        <Alert
          status="error"
          action={
            <IconButton
              icon={<CloseIcon color="red.400" size="xs" />}
              onPress={() => handleToggle(false)}
            />
          }
          actionProps={{ alignSelf: 'center' }}
        >
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>description goes here</Alert.Description>
        </Alert>
      </Collapse>
      <Button size={'sm'} onPress={() => handleToggle(true)} my={1}>
        Re-Open
      </Button>
    </Box>
  );
}

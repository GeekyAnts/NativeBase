import React from 'react';
import {
  Alert,
  Collapse,
  Button,
  IconButton,
  Icon,
  Box,
  NativeBaseProvider,
  Center,
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
              icon={<Icon name="close" color="red.400" size="xs" />}
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

export default () => (
  <NativeBaseProvider>
    <Center>
      <Example />
    </Center>
  </NativeBaseProvider>
);

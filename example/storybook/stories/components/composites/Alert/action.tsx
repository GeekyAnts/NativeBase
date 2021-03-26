import React from 'react';
import { Alert, CloseButton, Collapse, Button } from 'native-base';
export default function () {
  const [show, setShow] = React.useState(true);
  const handleToggle = (val: boolean) => setShow(val);
  return (
    <>
      <Collapse isOpen={show}>
        <Alert
          status="error"
          action={
            <CloseButton
              size="xs"
              // _text={{ color: 'red.400' }}
              onPress={() => handleToggle(false)}
            />
          }
        >
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>description goes here</Alert.Description>
        </Alert>
      </Collapse>
      <Button size={'sm'} onPress={() => handleToggle(true)}>
        Re-Open
      </Button>
    </>
  );
}

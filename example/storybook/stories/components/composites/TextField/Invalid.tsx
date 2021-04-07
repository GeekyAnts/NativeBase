import React from 'react';
import { Stack, TextField, Button } from 'native-base';

export default function () {
  const [isInvalid, setIsInvalid] = React.useState(true);
  return (
    <Stack space={4}>
      <TextField
        w="90%"
        isInvalid={isInvalid}
        placeholder="Default TextField"
        helperText="Sample helper text"
        errorMessage="Sample error message"
      />
      <Button onPress={() => setIsInvalid(!isInvalid)}>
        Toggle Invalid State
      </Button>
    </Stack>
  );
}

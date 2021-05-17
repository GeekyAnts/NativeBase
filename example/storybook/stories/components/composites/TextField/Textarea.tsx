import React from 'react';
import { Stack, TextField, Button } from 'native-base';

export const Example = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  return (
    <Stack space={4} w="90%">
      <TextField
        component="textarea"
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
};

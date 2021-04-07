import React from 'react';
import { Stack, TextField, Button, Icon } from 'native-base';

export default function () {
  const [isInvalid, setIsInvalid] = React.useState(true);
  return (
    <Stack space={4} w="90%">
      <TextField
        bg="gray.300"
        variant="underlined"
        isInvalid={isInvalid}
        helperText="Sample helper text"
        errorMessage="Sample error message"
        placeholder="Default TextField"
        InputLeftElement={
          <Icon name="calendar-today" size="md" m={3} color="muted.500" />
        }
        InputRightElement={
          <Icon name="cancel" size="md" m={3} color="muted.500" />
        }
      />
      <Button onPress={() => setIsInvalid(!isInvalid)}>
        Toggle Invalid State
      </Button>
    </Stack>
  );
}

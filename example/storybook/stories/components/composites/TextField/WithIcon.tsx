import React from 'react';
import { Stack, TextField, Button, Icon } from 'native-base';

export const Example = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  return (
    <Stack space={4} w="90%">
      <TextField
        variant="underlined"
        isInvalid={isInvalid}
        helperText="Sample helper text"
        errorMessage="Sample error message"
        placeholder="Default TextField"
        InputLeftElement={
          <Icon
            name="calendar-today"
            size="md"
            my={3}
            ml={3}
            color="muted.500"
          />
        }
        InputRightElement={
          <Icon name="cancel" size="md" my={3} mr={3} color="muted.500" />
        }
      />
      <Button onPress={() => setIsInvalid(!isInvalid)}>
        Toggle Invalid State
      </Button>
    </Stack>
  );
};

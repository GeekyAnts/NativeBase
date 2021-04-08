import React from 'react';
import { Button, Alert, useSnackbar, VStack, Box } from 'native-base';
export default function () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Box safeArea>
      <Alert status="success">
        <Alert.Icon />
        <Alert.Description>Well done, we are proud of you.</Alert.Description>
      </Alert>
    </Box>
  );
  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setSnackbar(template, {
            accessibilityAnnouncement: 'Well done, we are proud of you.',
            autoHideDuration: 3000,
            accessibilityLiveRegion: 'assertive',
          })
        }
      >
        Get Default Snackbar
      </Button>
      <Button
        onPress={() =>
          setSnackbar(template, {
            placement: 'top',
            accessibilityAnnouncement: 'Well one, we are proud of you.',
            accessibilityLiveRegion: 'polite',
          })
        }
      >
        Get Snackbar on Top
      </Button>
    </VStack>
  );
}

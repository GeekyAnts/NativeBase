import React from 'react';
import { Button, Alert, useSnackbar, VStack } from 'native-base';
export default function () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Alert status="success">
      <Alert.Icon />
      <Alert.Description>Welldone, we are proud of you.</Alert.Description>
    </Alert>
  );
  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setSnackbar(template, {
            accessibilityAnnouncement: 'Well done, we are proud of you.',
            autoHideDuration: 1000,
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
            accessibilityAnnouncement: 'Well done, we are proud of you.',
            accessibilityLiveRegion: 'polite',
          })
        }
      >
        Get Snackbar With Overlay
      </Button>
    </VStack>
  );
}

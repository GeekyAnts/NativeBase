import React from 'react';
import {
  Button,
  useOverlay,
  VStack,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertCloseButton,
} from 'native-base';

export default function () {
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlay(
            <Alert status="warning">
              <AlertIcon />
              <AlertDescription> Sample Warning message</AlertDescription>
              <AlertCloseButton onPress={closeOverlay} />
            </Alert>,
            {
              position: 'top',
              // disableOverlay: true,
            }
          )
        }
      >
        Show Overlay
      </Button>
    </VStack>
  );
}

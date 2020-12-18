import React from 'react';
import {
  Button,
  useOverlay,
  VStack,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
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
              <CloseButton
                onPress={closeOverlay}
                position="absolute"
                right="8px"
              />
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

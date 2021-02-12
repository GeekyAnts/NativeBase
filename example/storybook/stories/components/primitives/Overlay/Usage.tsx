import React from 'react';
import { Button, useOverlay, VStack, Alert, CloseButton } from 'native-base';

export default function () {
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlay(
            <Alert status="warning">
              <Alert.Icon />
              <Alert.Description> Sample Warning message</Alert.Description>
              <CloseButton
                onPress={closeOverlay}
                position="absolute"
                right="8px"
              />
            </Alert>,
            {
              position: 'top',
              closeOnPress: true,
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

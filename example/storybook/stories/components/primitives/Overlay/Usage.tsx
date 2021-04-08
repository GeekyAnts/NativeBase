import React from 'react';
import {
  Button,
  useOverlay,
  VStack,
  Alert,
  Box,
  IconButton,
  Icon,
} from 'native-base';

export default function () {
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <Box safeArea>
      <VStack space={3}>
        <Button
          onPress={() =>
            setOverlay(
              <Box w="100%" safeArea>
                <Alert status="warning">
                  <Alert.Icon />
                  <Alert.Description> Sample Warning message</Alert.Description>

                  <IconButton
                    icon={<Icon name="close" size="sm" color="danger.500" />}
                    position="absolute"
                    right="8px"
                    onPress={closeOverlay}
                  />
                </Alert>
              </Box>,
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
    </Box>
  );
}

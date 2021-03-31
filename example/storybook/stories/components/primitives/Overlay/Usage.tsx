import React from 'react';
import {
  Button,
  useOverlay,
  VStack,
  Alert,
  View,
  IconButton,
  Icon,
} from 'native-base';

export default function () {
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <View safeArea>
      <VStack space={3}>
        <Button
          onPress={() =>
            setOverlay(
              <View w="100%" safeArea>
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
              </View>,
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
    </View>
  );
}

import React from 'react';
import {
  Alert,
  Collapse,
  Button,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
} from 'native-base';

export function Example() {
  const [show, setShow] = React.useState(true);
  return (
    <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert w="90%" maxW="400" status="error">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.800' }}
                >
                  Please try again later!
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
                onPress={() => setShow(false)}
              />
            </HStack>
            <Box pl="6" _dark={{ _text: { color: 'coolGray.600' } }}>
              Your coupon could not be processed at this time.
            </Box>
          </VStack>
        </Alert>
      </Collapse>
      <Button size={'sm'} onPress={() => setShow(true)} mt={8} mx="auto">
        Re-Open
      </Button>
    </Box>
  );
}

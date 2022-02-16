import React from 'react';
import {
  Slide,
  Button,
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Spacer,
  WarningIcon,
  Input,
  Center,
  useSafeArea,
} from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  return (
    <Center>
      <Box w="300">
        <Box w="100%" alignItems="flex-start" justifyContent="center">
          <VStack space={3} w="100%">
            <HStack alignItems="flex-end">
              <Heading>Order</Heading>
              <Spacer />
              <WarningIcon color="orange.600" size="xs" mb="1.5" />
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Sub Total</Text>
              <Text color="blueGray.400">$298.77</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Tax</Text>
              <Text color="blueGray.400">$38.84</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Total Amount</Text>
              <Text color="green.500">$337.61</Text>
            </HStack>
            <VStack space={2} mt="2">
              <Text bold>Promo Code</Text>
              <HStack space={3}>
                <Input flex="1" />
                <Button variant="outline">Apply</Button>
              </HStack>
            </VStack>
            <Button my="2" onPress={() => setIsOpen(!isOpen)}>
              Place Order
            </Button>
          </VStack>
        </Box>
        <Slide in={isOpen} placement="top">
          <Box
            p="2"
            _text={{
              color: 'orange.600',
            }}
            bg="orange.200"
            {...safeAreaProps}
          >
            Due to government restrictions around COVID- 19, you may experience
            a delay in your delivery.
          </Box>
        </Slide>
      </Box>
    </Center>
  );
};

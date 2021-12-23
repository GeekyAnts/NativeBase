import React from 'react';
import {
  Slide,
  Button,
  Box,
  Input,
  Heading,
  VStack,
  HStack,
  Text,
  CheckIcon,
} from 'native-base';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box
      width={{ base: '75%', md: '50%' }}
      h="100%"
      // alignItems="flex-start"
      justifyContent="center"
    >
      <VStack space={3} w="100%">
        <HStack alignItems="flex-end">
          <Heading>Order</Heading>
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
          <Text color="emerald.600">$337.61</Text>
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
      <Slide in={isOpen} placement="bottom">
        <Box
          w="100%"
          position="absolute"
          bottom="2"
          p="2"
          mx={-3}
          borderRadius="xs"
          bg="emerald.100"
          alignItems="center"
          justifyContent="center"
          _dark={{ bg: 'emerald.200' }}
        >
          <HStack space={2}>
            <CheckIcon
              size="4"
              color="emerald.600"
              mt="1"
              _dark={{ color: 'emerald.700' }}
            />
            <Text
              color="emerald.600"
              textAlign="center"
              _dark={{ color: 'emerald.700' }}
              fontWeight="medium"
            >
              Order Placed Successfully.
            </Text>
          </HStack>
        </Box>
      </Slide>
    </Box>
  );
};

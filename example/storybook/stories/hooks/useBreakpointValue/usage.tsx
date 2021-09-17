import React from 'react';
import { Icon, useBreakpointValue, Text, VStack, Heading } from 'native-base';
import { FontAwesome, Foundation, Feather } from '@expo/vector-icons';
import { View } from 'react-native';
export const Example = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    lg: 'row',
  });
  return (
    <VStack space={10} alignItems="center" justifyContent="center">
      <Heading>Why us?</Heading>
      <View style={{ flexDirection: flexDir }}>
        <VStack
          m="1.5"
          w="140"
          borderRadius="xl"
          p="3"
          bg="cyan.200"
          space={2}
          alignItems="center"
          justifyContent="center"
        >
          <Icon
            as={FontAwesome}
            name="dollar"
            size="sm"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          />
          <Text
            fontSize="lg"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          >
            Money-back Guarantee
          </Text>
        </VStack>
        <VStack
          m="1.5"
          w="140"
          borderRadius="xl"
          p="3"
          bg="cyan.200"
          space={2}
          alignItems="center"
          justifyContent="center"
        >
          <Icon
            as={Foundation}
            name="shield"
            size="sm"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          />
          <Text
            fontSize="lg"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          >
            Secure Checkout
          </Text>
        </VStack>
        <VStack
          m="1.5"
          w="140"
          borderRadius="xl"
          p="3"
          bg="cyan.200"
          space={2}
          alignItems="center"
          justifyContent="center"
        >
          <Icon
            as={Feather}
            name="clock"
            size="sm"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          />
          <Text
            fontSize="lg"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          >
            Fast Turn Around
          </Text>
        </VStack>
      </View>
    </VStack>
  );
};

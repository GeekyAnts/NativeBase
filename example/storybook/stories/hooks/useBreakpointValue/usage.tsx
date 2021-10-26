import React from 'react';
import {
  Icon,
  useBreakpointValue,
  Text,
  VStack,
  Heading,
  ScrollView,
} from 'native-base';
import { Foundation, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

export const Example = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    lg: 'row',
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <Heading>Why us?</Heading>
        <View style={{ flexDirection: flexDir }}>
          <VStack
            m="3"
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
            m="3"
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
            m="3"
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
    </ScrollView>
  );
};

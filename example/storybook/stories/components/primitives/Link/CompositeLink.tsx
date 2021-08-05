import React from 'react';
import { Link, Text, Card, VStack, Avatar, Heading } from 'native-base';

export const Example = () => {
  return (
    <Link
      href="https://nativebase.io"
      _hover={{ bg: 'primary.100' }}
      isExternal
    >
      <Card width={64} p={6} py={8}>
        <VStack alignItems="center" space={5}>
          <Avatar
            source={{
              uri: 'https://docs.nativebase.io/img/nativebaselogo.svg',
            }}
            size="lg"
          >
            NB
          </Avatar>
          <Heading
            size="lg"
            fontWeight={700}
            _light={{ color: 'blueGray.700' }}
            _dark={{ color: 'blueGray.100' }}
          >
            NativeBase
          </Heading>
          <Text
            textAlign="center"
            fontSize={12}
            _light={{ color: 'blueGray.500' }}
            _dark={{ color: 'gray.50' }}
          >
            NativeBase is a component library that enables devs to build
            universal design systems. It is built on top of React Native,
            allowing you to develop apps for Android, iOS and the Web.
          </Text>
        </VStack>
      </Card>
    </Link>
  );
};

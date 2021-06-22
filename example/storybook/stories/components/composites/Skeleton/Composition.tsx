import React from 'react';
import {
  Box,
  Skeleton,
  VStack,
  Text,
  Avatar,
  HStack,
  Image,
} from 'native-base';
function Composition({ loaded }: any) {
  return (
    <VStack>
      <HStack alignItems="center">
        {loaded ? (
          <Avatar
            source={{
              uri: 'https://nativebase.github.io/img/native-base-icon.png',
            }}
          />
        ) : (
          <Skeleton variant="circle" size={12} />
        )}
        <Text fontWeight="bold" fontSize="lg" ml={2}>
          {loaded ? (
            'Nativebase'
          ) : (
            <Skeleton>
              <Box>Nativebase</Box>
            </Skeleton>
          )}
        </Text>
      </HStack>
      <Box size={200} mt={1}>
        {loaded ? (
          <Image
            source={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
            alt="NativeBase logo"
          />
        ) : (
          <Skeleton variant="rect" height="100%" />
        )}
      </Box>
    </VStack>
  );
}

export const Example = () => {
  return (
    <VStack space={4}>
      <Composition />
      <Composition loaded />
    </VStack>
  );
};

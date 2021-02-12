import React from 'react';
import { Box, Skeleton, Stack, Text, Avatar, HStack, Image } from 'native-base';
function Composition({ loaded }: any) {
  return (
    <Stack size={200}>
      <HStack alignItems="center">
        {loaded ? (
          <Avatar
            name="Ankur Kedia"
            source={{
              uri: 'https://nativebase.github.io/img/native-base-icon.png',
            }}
          />
        ) : (
          <Skeleton variant="circle" size={12} />
        )}
        <Text fontWeight="bold" fontSize="lg" ml={2}>
          {loaded ? 'Nativebase' : <Skeleton>Nativebase</Skeleton>}
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
    </Stack>
  );
}

export default function () {
  return (
    <HStack space={10}>
      <Composition />
      <Composition loaded />
    </HStack>
  );
}

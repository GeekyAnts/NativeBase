import React from 'react';
import { VStack, Image, ScrollView, Heading, Center } from 'native-base';
export function Example() {
  return (
    <ScrollView px="20">
      <Center mt="3">
        <Heading mb="10">Image Sizes</Heading>
        <VStack space={2} alignItems="center" safeAreaTop my={6}>
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
            <Image
              size={size}
              resizeMode="cover"
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt={'Alternate Text ' + size}
            />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
}

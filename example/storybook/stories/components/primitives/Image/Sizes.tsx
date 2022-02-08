import React from 'react';
import { VStack, Image, ScrollView, Heading, Center } from 'native-base';

export function Example() {
  return (
    <>
      <Heading mb="10" textAlign="center" mt="3">
        Image Sizes
      </Heading>
      <ScrollView px="20">
        {/* <Center mt="3" h="80"> */}

        <VStack
          space={2}
          justifyContent="center"
          alignItems="center"
          safeAreaTop
          // my={6}
          mb={6}
        >
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
            <Image
              key={size}
              size={size}
              resizeMode="cover"
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt={'Alternate Text ' + size}
            />
          ))}
        </VStack>
        {/* </Center> */}
      </ScrollView>
    </>
  );
}

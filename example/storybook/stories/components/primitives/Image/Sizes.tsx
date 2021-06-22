import React from 'react';
import { VStack, Image } from 'native-base';
import { ScrollView } from 'react-native';
export function Example() {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

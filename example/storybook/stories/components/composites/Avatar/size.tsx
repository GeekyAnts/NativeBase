import React from 'react';
import { Avatar, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={1}>
      <Avatar
        size="xs"
        name="Sanket Sahu"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      />
      <Avatar
        size="sm"
        name="Himanshu Satija"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/929409889788510208/gRr2f7rZ_400x400.jpg',
        }}
      />
      <Avatar
        size="md"
        name="Rohit Singh"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
        }}
      />
      <Avatar
        size="lg"
        name="Ankur Kedia"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      />
      <Avatar
        size="xl"
        name="Gaurav Guha"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      />
      <Avatar
        size="2xl"
        name="Rehman Baig"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      />
    </HStack>
  );
}

import React from 'react';
import { Avatar, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Avatar
        name="Sanket Sahu"
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      />
      <Avatar
        name="Gaurav Guha"
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      />
      <Avatar
        name="Rohit Singh"
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
        }}
      />
      <Avatar
        name="Ankur Kedia"
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      />
      <Avatar
        name="Suraj Ahmed"
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/983582580372004864/h9ccP0Ea_400x400.jpg',
        }}
      />
      <Avatar
        name="Rehman Baig"
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      />
    </HStack>
  );
}

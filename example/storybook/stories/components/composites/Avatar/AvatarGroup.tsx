import React from 'react';
import { Avatar, AvatarGroup } from 'native-base';

export default function () {
  return (
    <AvatarGroup size="lg" max={4}>
      <Avatar
        name="Sanket Sahu"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      />
      <Avatar
        name="Ankur Kedia"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      />
      <Avatar
        name="Rohit Singh"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
        }}
      />
      <Avatar
        name="Rehman Baig"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      />
      <Avatar
        name="Christian Nwamba"
        source={{ uri: 'https://bit.ly/code-beast' }}
      />
      <Avatar
        name="Gaurav Guha"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      />
    </AvatarGroup>
  );
}

import React from 'react';
import { Avatar } from 'native-base';

export const Example = () => {
  return (
    <Avatar.Group size="lg" max={3}>
      <Avatar
        bg="green.500"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
        }}
      >
        SS
      </Avatar>
      <Avatar
        bg="lightBlue.500"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      >
        AK
      </Avatar>
      <Avatar
        bg="indigo.500"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}
      >
        RS
      </Avatar>
      <Avatar
        bg="amber.600"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      >
        MR
      </Avatar>
      <Avatar bg="emerald.600" source={{ uri: 'https://bit.ly/code-beast' }}>
        CB
      </Avatar>
      <Avatar
        bg="blue.600"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      >
        GG
      </Avatar>
      <Avatar
        bg="black.600"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}
      >
        RS
      </Avatar>
      <Avatar
        bg="blueGray.600"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      >
        MR
      </Avatar>
    </Avatar.Group>
  );
};

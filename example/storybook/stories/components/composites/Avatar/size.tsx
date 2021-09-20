import React from 'react';
import { Avatar, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      space={1}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <Avatar
        bg="green.500"
        size="xs"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      >
        SS
      </Avatar>
      <Avatar
        bg="cyan.500"
        size="sm"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/929409889788510208/gRr2f7rZ_400x400.jpg',
        }}
      >
        HS
      </Avatar>
      <Avatar
        bg="indigo.500"
        size="md"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}
      >
        RS
      </Avatar>
      <Avatar
        bg="amber.500"
        size="lg"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      >
        AK
      </Avatar>
      <Avatar
        bg="pink.600"
        size="xl"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      >
        GG
      </Avatar>
      <Avatar
        bg="purple.600"
        size="2xl"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      >
        RB
      </Avatar>
    </Stack>
  );
};

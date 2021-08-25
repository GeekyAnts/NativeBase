import React, { useState } from 'react';
import { Skeleton, Text, Avatar, Box } from 'native-base';
export const Example = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState('');
  setTimeout(() => {
    setIsLoaded(true);
    setText(
      ' Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting'
    );
  }, 5000);

  return (
    <Box w="80%">
      <Skeleton.Circle isLoaded={isLoaded} size={16}>
        <Avatar
          size={16}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
          }}
        >
          SS
        </Avatar>
      </Skeleton.Circle>
      <Skeleton.Text
        noOfLines={6}
        mt={5}
        h={120}
        lineHeight={'12px'}
        space={2}
        isLoaded={isLoaded}
      >
        <Text fontSize={'md'} lineHeight={'20px'} mt={5}>
          {text}
        </Text>
      </Skeleton.Text>
    </Box>
  );
};

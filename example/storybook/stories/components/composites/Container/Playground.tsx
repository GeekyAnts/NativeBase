import React from 'react';
import { Heading, Container, Text } from 'native-base';
import { boolean, text } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <Container
      centerContent={boolean('centerContent', true)}
      maxWidth={text('override default max-width', '80%')}
    >
      <Heading>Benefits to a joint design and development system</Heading>
      <Text>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Text>
    </Container>
  );
};

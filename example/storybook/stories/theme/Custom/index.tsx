import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import Basic from './Basic';
import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    custom: {
      100: '#f7c',
      200: '#faa',
      300: '#1ac',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'custom.100',
      },
    },
  },
});

storiesOf('Custom Theme', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <Wrapper theme={theme}>{getStory()}</Wrapper>
  ))
  .add('Basic', () => <Basic />);

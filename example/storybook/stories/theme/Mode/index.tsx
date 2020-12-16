import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import { extendTheme, themeTools } from 'native-base';
import Basic from './Basic';

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: (props: any) => {
        return {
          color: themeTools.mode('red.300', 'blue.300')(props),
          fontWeight: 'bold',
        };
      },
    },
  },
});

storiesOf('Mode', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <Wrapper theme={customTheme}>{getStory()}</Wrapper>
  ))
  .add('Basic', () => <Basic />);

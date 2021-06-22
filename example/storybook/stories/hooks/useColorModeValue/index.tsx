import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Basic } from './Basic';

storiesOf('useColorModeValue', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <View style={{ flex: 1 }}>{getStory()}</View>
  ))
  .add('Basic', () => <Basic />);

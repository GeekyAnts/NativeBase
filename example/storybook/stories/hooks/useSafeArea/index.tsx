import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Usage from './Usage';
import { View } from 'react-native';

storiesOf('useSafeArea', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <View>{getStory()}</View>)
  .add('Usage', () => <Usage />);

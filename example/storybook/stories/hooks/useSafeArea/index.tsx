import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Basic from './Basic';
import { View } from 'react-native';

storiesOf('useSafeArea', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <View>{getStory()}</View>)
  .add('Basic', () => <Basic />);

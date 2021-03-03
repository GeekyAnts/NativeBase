import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Flexible from './Flexible';
import Fixed from './Fixed';
import Hook from './Hook';

storiesOf('useSafeArea', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <View>{getStory()}</View>)
  .add('Flexible', () => <Flexible />)
  .add('Fixed', () => <Fixed />)
  .add('Hook', () => <Hook />);

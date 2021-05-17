import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Flexible } from './Flexible';
import { Example as Fixed } from './Fixed';
import { Example as Hook } from './Hook';

storiesOf('useSafeArea', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <View>{getStory()}</View>)
  .add('Flexible', () => <Flexible />)
  .add('Fixed', () => <Fixed />)
  .add('Hook', () => <Hook />);

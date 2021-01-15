import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { RNButtons } from './RNButton';
import { NBButtons } from './NBButton';
import { NativeBaseProvider, View as NBView } from 'native-base';
import { View } from 'react-native';

storiesOf('Button Perf', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <NativeBaseProvider>{getStory()}</NativeBaseProvider>
  ))
  .add('Empty', () => <></>)
  .add('PlainView', () => <View />)
  .add('RNView', () => <NBView />)
  .add('RNButtons', () => <RNButtons />)
  .add('NBButtons', () => <NBButtons />);

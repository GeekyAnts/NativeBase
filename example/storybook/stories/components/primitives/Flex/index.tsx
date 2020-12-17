import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Flex from './basic';
import { NativeBaseProvider } from 'native-base';
import { SpacerExample } from './spacer';

storiesOf('Flex', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <NativeBaseProvider>{getStory()}</NativeBaseProvider>
  ))
  .add('Basic Usage', () => <Flex />)
  .add('Spacer Example', () => <SpacerExample />);

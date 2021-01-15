import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';
import { RNButtons } from './RNButton';
import { NBButtons } from './NBButton';

storiesOf('Button Perf', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('RNButtons', () => <RNButtons />)
  .add('NBButtons', () => <NBButtons />);

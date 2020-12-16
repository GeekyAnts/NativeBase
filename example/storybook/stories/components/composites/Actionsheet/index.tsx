import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Usage from './Usage';
import Composition from './Composition';
import DisableOverlay from './DisableOverlay';

storiesOf('Actionsheet', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('DisableOverlay', () => <DisableOverlay />)
  .add('Composition', () => <Composition />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Icon from './Icon';
import Usage from './Usage';
import Composition from './Composition';
import DisableOverlay from './DisableOverlay';

storiesOf('Actionsheet', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('Icon', () => <Icon />)
  .add('DisableOverlay', () => <DisableOverlay />)
  .add('Composition', () => <Composition />);

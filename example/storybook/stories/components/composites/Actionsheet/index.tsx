import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as Icon } from './Icon';
import { Example as Usage } from './Usage';
import { Example as Composition } from './Composition';
import { Example as DisableOverlay } from './DisableOverlay';
import { Example as CustomBackdrop } from './CustomBackdrop';

storiesOf('Actionsheet', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('Icon', () => <Icon />)
  .add('DisableOverlay', () => <DisableOverlay />)
  .add('Composition', () => <Composition />)
  .add('Custom Backdrop', () => <CustomBackdrop />);

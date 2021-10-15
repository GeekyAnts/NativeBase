import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as Placement } from './Placement';
import { Example as Basic } from './Basic';
import { Example as CustomPosition } from './CustomPosition';
import type { StoryFn } from '@storybook/addons';

storiesOf('Fab', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Placement', () => <Placement />)
  .add('CustomPosition', () => <CustomPosition />);

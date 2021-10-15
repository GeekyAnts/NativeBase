import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as WithIcons } from './WithIcons';
import { Example as SquareCircle } from './SquareCircle';
import type { StoryFn } from '@storybook/addons';

storiesOf('Center', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('WithIcons', () => <WithIcons />)
  .add('SquareCircle', () => <SquareCircle />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Orientation } from './Orientation';
import { Example as Composition } from './Composition';
import type { StoryFn } from '@storybook/addons';

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Orientation', () => <Orientation />)
  .add('Composition', () => <Composition />);

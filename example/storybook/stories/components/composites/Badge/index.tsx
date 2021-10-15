import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Color } from './color';
import { Example as Playground } from './knobEnabled';
import { Example as Variants } from './variants';
import { Example as Composition } from './composition';
import type { StoryFn } from '@storybook/addons';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Color', () => <Color />)
  .add('Variants', () => <Variants />)
  .add('Composition', () => <Composition />);

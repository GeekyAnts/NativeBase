import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Color } from './color';
import { Example as Size } from './size';
import { Example as Playground } from './withKnob';
// import {Example as Variant} from './variant';
// import {Example as Duration} from './duration';
import type { StoryFn } from '@storybook/addons';

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Color', () => <Color />)
  .add('Size', () => <Size />);
// .add('Variant', () => <Variant />);
// .add('Duration', () => <Duration />);

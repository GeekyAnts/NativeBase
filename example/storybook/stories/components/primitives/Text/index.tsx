import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as ChangingFontSize } from './ChangingFontSize';
import { Example as Overriden } from './Overriden';
import { Example as Truncated } from './Truncated';
import { Example as Nested } from './Nested';
import type { StoryFn } from '@storybook/addons';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Changing Font Size', () => <ChangingFontSize />)
  .add('Truncated', () => <Truncated />)
  .add('Overriden', () => <Overriden />)
  .add('Nested', () => <Nested />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as CustomStyle } from './CustomStyle';
import { Example as Playground } from './Playground';
import type { StoryFn } from '@storybook/addons';

storiesOf('FormControl', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('CustomStyle', () => <CustomStyle />);

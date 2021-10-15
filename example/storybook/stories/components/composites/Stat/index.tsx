import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Example from './Example';
import Indicator from './Indicator';
import type { StoryFn } from '@storybook/addons';

storiesOf('Stat', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Stat', () => <Example />)
  .add('Stat with Indicator', () => <Indicator />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example } from './basic';
import Wrapper from './../../Wrapper';
import type { StoryFn } from '@storybook/addons';

storiesOf('HStack', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Example />);

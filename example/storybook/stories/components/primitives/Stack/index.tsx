import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Stack } from './basic';
import { Example as Divider } from './divider';
import type { StoryFn } from '@storybook/addons';

storiesOf('Stack', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Stack />)
  .add('Divider', () => <Divider />);

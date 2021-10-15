import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Playground } from './Playground';
import type { StoryFn } from '@storybook/addons';

storiesOf('Container', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as ZStack } from './example';
import { Example as CenterStack } from './CenterStack';
import type { StoryFn } from '@storybook/addons';

storiesOf('ZStack', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic ZStack', () => <ZStack />)
  .add('ZStack items centered', () => <CenterStack />);

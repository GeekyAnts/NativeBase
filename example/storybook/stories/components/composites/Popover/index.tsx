import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as RefEg } from './RefEg';
import { Example as PopoverPositions } from './PopoverPositions';
import type { StoryFn } from '@storybook/addons';

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Popover positions', () => <PopoverPositions />)
  .add('Basic', () => <Basic />)
  .add('Focus on Open', () => <RefEg />);

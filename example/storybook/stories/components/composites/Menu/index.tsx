import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Group } from './Group';
import { Example as MenuOptionsGroup } from './MenuOptionsGroup';
import { Example as MenuPositions } from './MenuPositions';
import type { StoryFn } from '@storybook/addons';

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Group', () => <Group />)
  .add('MenuOptionsGroup', () => <MenuOptionsGroup />)
  .add('Menu positions', () => <MenuPositions />);

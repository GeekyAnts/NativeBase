import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as TooltipPositions } from './TooltipPositions';
import { Example as CustomTooltip } from './CustomTooltip';
import type { StoryFn } from '@storybook/addons';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Tooltip Positions', () => <TooltipPositions />)
  .add('Customizing', () => <CustomTooltip />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as TooltipPositions } from './TooltipPositions';
import { Example as CustomTooltip } from './CustomTooltip';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Tooltip Positions', () => <TooltipPositions />)
  .add('Customizing', () => <CustomTooltip />);

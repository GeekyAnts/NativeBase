import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as RefEg } from './RefEg';
import { Example as PopoverPositions } from './PopoverPositions';

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Popover positions', () => <PopoverPositions />)
  .add('Basic', () => <Basic />)
  .add('Focus on Open', () => <RefEg />);

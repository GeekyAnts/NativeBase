import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../components/Wrapper';
import { Example as Basic } from './Basic';
import { Example as Variations } from './Variations';
import type { StoryFn } from '@storybook/addons';

storiesOf('useContrastText', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Variations', () => <Variations />);

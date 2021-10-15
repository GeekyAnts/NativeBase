import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Basic } from './Basic';
import { Example as FormControlled } from './FormControlled';
import { Example as SelectLongList } from './SelectLongList';
import Wrapper from './../../Wrapper';
import type { StoryFn } from '@storybook/addons';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('FormControlled', () => <FormControlled />)
  .add('Select Long list', () => <SelectLongList />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Basic } from './Basic';
import { Example as FormControlled } from './FormControlled';
import { Example as SelectLongList } from './SelectLongList';
import Wrapper from './../../Wrapper';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('FormControlled', () => <FormControlled />)
  .add('Select Long list', () => <SelectLongList />);

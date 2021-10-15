import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Invalid from './Invalid';
import WithIcon from './WithIcon';
import Select from './Select';
import Textarea from './Textarea';
import Basic from './Basic';
import type { StoryFn } from '@storybook/addons';

storiesOf('TextField', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Textarea', () => <Textarea />)
  .add('Select', () => <Select />)
  .add('WithIcon', () => <WithIcon />)
  .add('Invalid', () => <Invalid />);

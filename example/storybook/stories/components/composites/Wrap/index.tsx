import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Spacing from './Spacing';
import AlignmentAlign from './AlignmentAlign';
import AlignmentJustify from './AlignmentJustify';
import type { StoryFn } from '@storybook/addons';

storiesOf('Wrap', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Space', () => <Spacing />)
  .add('AlignmentAlign', () => <AlignmentAlign />)
  .add('AlignmentJustify', () => <AlignmentJustify />);

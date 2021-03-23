import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Spacing from './Spacing';
import AlignmentAlign from './AlignmentAlign';
import AlignmentJustify from './AlignmentJustify';

storiesOf('Wrap', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Space', () => <Spacing />)
  .add('AlignmentAlign', () => <AlignmentAlign />)
  .add('AlignmentJustify', () => <AlignmentJustify />);

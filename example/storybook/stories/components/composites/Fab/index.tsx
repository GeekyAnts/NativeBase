import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Placement from './Placement';
import Basic from './Basic';
import CustomPosition from './CustomPosition';

storiesOf('Fab', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Placement', () => <Placement />)
  .add('CustomPosition', () => <CustomPosition />);

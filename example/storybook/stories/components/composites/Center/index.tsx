import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import WithIcons from './WithIcons';
import SquareCircle from './SquareCircle';

storiesOf('Center', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('WithIcons', () => <WithIcons />)
  .add('SquareCircle', () => <SquareCircle />);

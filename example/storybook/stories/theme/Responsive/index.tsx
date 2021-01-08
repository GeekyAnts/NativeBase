import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import Basic from './Basic';
import FontSize from './FontSize';
import Direction from './Direction';
import More from './More';
import Demo from './Demo';

storiesOf('Responsive', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('FontSize', () => <FontSize />)
  .add('More', () => <More />)
  .add('Direction', () => <Direction />)
  .add('Demo', () => <Demo />);

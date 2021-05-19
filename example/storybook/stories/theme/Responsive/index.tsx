import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import { Example as Basic } from './Basic';
import { Example as FontSize } from './FontSize';
import { Example as Direction } from './Direction';
import { Example as More } from './More';
import { Example as Demo } from './Demo';

storiesOf('Responsive', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('FontSize', () => <FontSize />)
  .add('More', () => <More />)
  .add('Direction', () => <Direction />)
  .add('Demo', () => <Demo />);

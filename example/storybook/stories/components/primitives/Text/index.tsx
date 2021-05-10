import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as ChangingFontSize } from './ChangingFontSize';
import { Example as Overriden } from './Overriden';
import { Example as Truncated } from './Truncated';
import { Example as Nested } from './Nested';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Changing Font Size', () => <ChangingFontSize />)
  .add('Truncated', () => <Truncated />)
  .add('Overriden', () => <Overriden />)
  .add('Nested', () => <Nested />);

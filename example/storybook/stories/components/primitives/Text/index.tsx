import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import ChangingFontSize from './ChangingFontSize';
import Overriden from './Overriden';
import Truncated from './Truncated';
import Nested from './Nested';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Changing Font Size', () => <ChangingFontSize />)
  .add('Truncated', () => <Truncated />)
  .add('Overriden', () => <Overriden />)
  .add('Nested', () => <Nested />);

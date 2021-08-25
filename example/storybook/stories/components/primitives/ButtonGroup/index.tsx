import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Sizes } from './sizes';
import { Example as Basic } from './basic';
import { Example as Variants } from './variants';
import { Example as IsAttached } from './isAttached';
import { Example as Direction } from './direction';
import Wrapper from './../../Wrapper';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Variants', () => <Variants />)
  .add('Sizes', () => <Sizes />)
  .add('isAttached', () => <IsAttached />)
  .add('direction', () => <Direction />);

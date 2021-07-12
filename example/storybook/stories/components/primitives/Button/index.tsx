import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as WithRef } from './WithRef';
import { Example as Sizes } from './sizes';
import { Example as Basic } from './basic';
import { Example as Variants } from './variants';
import { Example as Loading } from './loading';
import { Example as Icons } from './icons';
import { Example as Composition } from './Composition';
import Wrapper from './../../Wrapper';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Variants', () => <Variants />)
  .add('Sizes', () => <Sizes />)
  .add('Loading', () => <Loading />)
  .add('Icons', () => <Icons />)
  .add('Composition', () => <Composition />)
  .add('WithRef', () => <WithRef />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Basic } from './basic';
import WithRef from './WithRef';
import { Composition } from './composition';
import { CompositionCard } from './composition-card';
import { CompositionShoesCard } from './composition-shoes-card';
import Wrapper from './../../Wrapper';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Box', () => <Basic />)
  .add('Composition', () => <Composition />)
  .add('With Ref', () => <WithRef />)
  .add('Composition Card', () => <CompositionCard />)
  .add('Composition Shoes Card', () => <CompositionShoesCard />);

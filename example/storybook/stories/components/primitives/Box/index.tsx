import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Basic } from './basic';
import WithRef from './WithRef';
import { Composition } from './composition';
import { CompositionCard } from './composition-card';
import { CompositionCard1 } from './composition-card1';
import { CompositionCard2 } from './composition-card2';
import { CompositionCard3 } from './composition-card3';
import CompositionShoesCard from './composition-shoes-card';
import Wrapper from './../../Wrapper';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Box', () => <Basic />)
  .add('Composition', () => <Composition />)
  .add('With Ref', () => <WithRef />)
  .add('Composition Card', () => <CompositionCard />)
  .add('Composition Shoes Card', () => <CompositionShoesCard />)
  .add('CompositionCard1', () => <CompositionCard1 />)
  .add('CompositionCard2', () => <CompositionCard2 />)
  .add('CompositionCard3', () => <CompositionCard3 />);

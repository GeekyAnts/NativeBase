import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Basic } from './basic';
import { Example as LinearGrad } from './LinearGrad';
import { Example as WithRef } from './WithRef';
import { Example as Composition } from './composition';
// import { Example as CompositionCard } from './composition-card';
// import { Example as CompositionCard1 } from './composition-card1';
// import { Example as CompositionCard2 } from './composition-card2';
// import { Example as CompositionCard3 } from './composition-card3';
// import { Example as CompositionShoesCard } from './composition-shoes-card';
import Wrapper from './../../Wrapper';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Box', () => <Basic />)
  .add('LinearGradient Box', () => <LinearGrad />)
  .add('Composition', () => <Composition />)
  .add('With Ref', () => <WithRef />);
// .add('Composition Card', () => <CompositionCard />)
// .add('Composition Shoes Card', () => <CompositionShoesCard />)
// .add('CompositionCard1', () => <CompositionCard1 />)
// .add('CompositionCard2', () => <CompositionCard2 />)
// .add('CompositionCard3', () => <CompositionCard3 />);

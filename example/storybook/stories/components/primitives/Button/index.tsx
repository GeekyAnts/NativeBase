import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import ButtonGroup from './ButtonGroup';
import WithRef from './WithRef';
import Sizes from './sizes';
import Usage from './usage';
import Variants from './variants';
import Loading from './loading';
import Icons from './icons';
import Composition from './Composition';
import Wrapper from './../../Wrapper';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('Sizes', () => <Sizes />)
  .add('Variants', () => <Variants />)
  .add('Loading', () => <Loading />)
  .add('Icons', () => <Icons />)
  .add('ButtonGroup', () => <ButtonGroup />)
  .add('Composition', () => <Composition />)
  .add('WithRef', () => <WithRef />);

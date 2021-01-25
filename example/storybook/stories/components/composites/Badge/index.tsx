import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './usage';
import Color from './color';
import Playground from './knobEnabled';
import Variants from './variants';
import Composition from './composition';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  // .add('Playground', () => <Playground />)
  // .add('Usage', () => <Usage />)
  // .add('Color', () => <Color />)
  // .add('Variants', () => <Variants />)
  .add('Composition', () => <Composition />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Playground from './knobEnabled';
import Composition from './composition';
import Usage from './usage';
import Variant from './variant';
import Status from './status';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Status', () => <Status />)
  .add('Variant', () => <Variant />)
  .add('Composition', () => <Composition />);

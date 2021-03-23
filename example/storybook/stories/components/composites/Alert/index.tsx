import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Playground from './knobEnabled';
import Composition from './composition';
import Usage from './usage';
import Variant from './variant';
import Status from './status';
import ColorScheme from './colorScheme';
import Action from './action';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Status', () => <Status />)
  .add('ColorScheme', () => <ColorScheme />)
  .add('Variant', () => <Variant />)
  .add('Composition', () => <Composition />)
  .add('action', () => <Action />);

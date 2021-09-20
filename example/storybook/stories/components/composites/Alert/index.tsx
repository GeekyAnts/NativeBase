import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
// import { Example as Playground } from './knobEnabled';
import { Example as Composition } from './composition';
import { Example as Basic } from './basic';
import { Example as Usage } from './usage';
import { Example as Variant } from './variant';
import { Example as Status } from './status';
import { Example as ColorScheme } from './colorScheme';
import { Example as Action } from './action';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  // .add('Playground', () => <Playground />)
  .add('Basic', () => <Basic />)
  .add('Usage', () => <Usage />)
  .add('Status', () => <Status />)
  .add('ColorScheme', () => <ColorScheme />)
  .add('Variant', () => <Variant />)
  .add('Composition', () => <Composition />)
  .add('action', () => <Action />);

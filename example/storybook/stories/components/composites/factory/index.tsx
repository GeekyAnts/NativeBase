import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Theme } from './theme';
import { Example as Modes } from './modes';
import { Example as Ref } from './ref';

storiesOf('Factory', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('Theme', () => <Theme />)
  .add('Modes', () => <Modes />)
  .add('Ref', () => <Ref />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './usage';
import Theme from './theme';
import Modes from './modes';
import Ref from './ref';

storiesOf('Factory', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('Theme', () => <Theme />)
  .add('Modes', () => <Modes />)
  .add('Ref', () => <Ref />);

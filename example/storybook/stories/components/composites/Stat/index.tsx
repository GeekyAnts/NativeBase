import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Example from './Example';
import Indicator from './Indicator';

storiesOf('Stat', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Stat', () => <Example />)
  .add('Stat with Indicator', () => <Indicator />);

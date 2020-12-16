import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './Usage';
import Playground from './Playground';
import Loaded from './Loaded';
import WrapperExample from './Wrapper';
import Color from './Color';
import Circle from './Circle';
import Text from './Text';

storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Wrapper', () => <WrapperExample />)
  .add('Circle', () => <Circle />)
  .add('Text', () => <Text />)
  .add('Color', () => <Color />)
  .add('Loaded', () => <Loaded />);

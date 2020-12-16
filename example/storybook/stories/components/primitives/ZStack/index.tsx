import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import ZStack from './example';
import CenterStack from './CenterStack';

storiesOf('ZStack', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic ZStack', () => <ZStack />)
  .add('ZStack items centered', () => <CenterStack />);

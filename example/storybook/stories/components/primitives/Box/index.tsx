import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Basic } from './basic';
import WithRef from './WithRef';
import { Composite } from './composition';
import Wrapper from './../../Wrapper';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Box', () => <Basic />)
  .add('Composition using Box', () => <Composite />)
  .add('With Ref', () => <WithRef />);

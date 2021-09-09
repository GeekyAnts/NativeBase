import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as BorderRadius } from './BorderRadius';
import { Example as WithRef } from './WithRef';
import { Example as FallbackSupport } from './FallbackSupport';
import { Example as FallbackElement } from './FallbackElement';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('BorderRadius', () => <BorderRadius />)
  .add('FallbackSupport', () => <FallbackSupport />)
  .add('FallbackElement', () => <FallbackElement />)
  .add('WithRef', () => <WithRef />);

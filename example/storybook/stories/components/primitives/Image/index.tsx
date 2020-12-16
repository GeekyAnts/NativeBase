import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Sizes from './Sizes';
import BorderRadius from './BorderRadius';
import WithRef from './WithRef';
import FallbackSupport from './FallbackSupport';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('BorderRadius', () => <BorderRadius />)
  .add('FallbackSupport', () => <FallbackSupport />)
  .add('WithRef', () => <WithRef />);

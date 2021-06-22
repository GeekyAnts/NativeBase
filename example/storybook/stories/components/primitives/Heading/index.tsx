import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as Truncate } from './Truncate';
import { Example as OverridenStyle } from './OverridenStyle';
import { Example as Composition } from './Composition';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Truncate', () => <Truncate />)
  .add('OverridenStyle', () => <OverridenStyle />)
  .add('Composition', () => <Composition />);

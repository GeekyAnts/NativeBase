import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Color } from './Color';
import { Example as Composition } from './Composition';
import { Example as IsLoaded } from './isLoaded';
import { Example as FadeDuration } from './FadeDuration';

storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Color', () => <Color />)
  .add('Composition', () => <Composition />)
  .add('FadeDuration', () => <FadeDuration />)
  .add('isLoaded', () => <IsLoaded />);

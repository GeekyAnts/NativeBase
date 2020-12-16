import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Colors from './Colors';
import Sizes from './Sizes';
import Label from './Label';
import Thickness from './Thickness';
import Indeterminate from './Indeterminate';
import TrackColor from './TrackColor';
import MinMax from './MinMax';

storiesOf('CircularProgress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Colors', () => <Colors />)
  .add('Thickness', () => <Thickness />)
  .add('TrackColor', () => <TrackColor />)
  .add('Label', () => <Label />)
  .add('Min and Max', () => <MinMax />)
  .add('Indeterminate', () => <Indeterminate />);

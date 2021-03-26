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
import ColorScheme from './ColorScheme';

storiesOf('CircularProgress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('ColorScheme', () => <ColorScheme />)
  .add('Colors', () => <Colors />)
  .add('TrackColor', () => <TrackColor />)
  .add('Label', () => <Label />)
  .add('Sizes', () => <Sizes />)
  .add('Thickness', () => <Thickness />)
  .add('Min and Max', () => <MinMax />)
  .add('Indeterminate', () => <Indeterminate />);

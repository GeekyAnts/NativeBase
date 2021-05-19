import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Composition } from './Composition';
import { Example as Basic } from './Basic';
import { Example as Flat } from './Flat';
import { Example as Size } from './Sizes';
import { Example as CustomBgColor } from './CustomBgColor';
import { Example as ColorScheme } from './ColorScheme';

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Progress Bar', () => <Basic />)
  .add('ColorSchemes', () => <ColorScheme />)
  .add('Flat', () => <Flat />)
  .add('Sizes', () => <Size />)
  .add('CustomBgColor', () => <CustomBgColor />)
  .add('Composition', () => <Composition />);

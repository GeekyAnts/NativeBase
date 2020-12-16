import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Composition from './Composition';
import Basic from './Basic';
import Rounded from './Rounded';
import CustomBgColor from './CustomBgColor';
import ColorScheme from './ColorScheme';

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Progress Bar', () => <Basic />)
  .add('ColorSchemes', () => <ColorScheme />)
  .add('Rounded', () => <Rounded />)
  .add('CustomBgColor', () => <CustomBgColor />)
  .add('Composition', () => <Composition />);

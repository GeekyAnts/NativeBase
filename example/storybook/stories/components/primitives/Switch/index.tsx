import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Sizes from './Sizes';
import SwitchBgColor from './SwitchBgColor';
import Accessibility from './Accessibility';
import ColorSchemes from './ColorSchemes';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Switch bgColor', () => <SwitchBgColor />)
  .add('ColorSchemes', () => <ColorSchemes />)
  .add('Accessibility', () => <Accessibility />);

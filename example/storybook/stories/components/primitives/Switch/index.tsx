import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as SwitchBgColor } from './SwitchBgColor';
import { Example as Accessibility } from './Accessibility';
import { Example as ColorSchemes } from './ColorSchemes';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Switch bgColor', () => <SwitchBgColor />)
  .add('ColorSchemes', () => <ColorSchemes />)
  .add('Accessibility', () => <Accessibility />);

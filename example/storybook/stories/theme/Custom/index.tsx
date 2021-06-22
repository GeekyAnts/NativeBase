import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Basic } from './Basic';
import { Example as CustomizingBase } from './CustomizingBase';
import { Example as CustomizingTheme } from './CustomizingTheme';
import { Example as CustomizingVariant } from './CustomizingVariant';
import { Example as CustomizingComponents } from './CustomizingComponents';

storiesOf('Custom Theme', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => getStory())
  .add('Basic', () => <Basic />)
  .add('CustomizingTheme', () => <CustomizingTheme />)
  .add('CustomizingComponents', () => <CustomizingComponents />)
  .add('CustomizingBase', () => <CustomizingBase />)
  .add('CustomizingVariant', () => <CustomizingVariant />);

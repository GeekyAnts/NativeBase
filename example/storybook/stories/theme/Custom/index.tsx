import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Basic from './Basic';
import CustomizingBase from './CustomizingBase';
import CustomizingTheme from './CustomizingTheme';
import CustomizingVariant from './CustomizingVariant';
import CustomizingComponents from './CustomizingComponents';

storiesOf('Custom Theme', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => getStory())
  .add('Basic', () => <Basic />)
  .add('CustomizingTheme', () => <CustomizingTheme />)
  .add('CustomizingComponents', () => <CustomizingComponents />)
  .add('CustomizingBase', () => <CustomizingBase />)
  .add('CustomizingVariant', () => <CustomizingVariant />);

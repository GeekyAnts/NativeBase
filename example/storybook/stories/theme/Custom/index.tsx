import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Basic from './Basic';
import CustomizingTheme from './CustomizingTheme';
import CustomizingComponents from './CustomizingComponents';

storiesOf('Custom Theme', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => getStory())
  .add('Basic', () => <Basic />)
  .add('CustomizingTheme', () => <CustomizingTheme />)
  .add('CustomizingComponents', () => <CustomizingComponents />);

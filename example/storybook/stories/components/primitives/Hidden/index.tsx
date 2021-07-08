import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as HiddenFromAndToBreakpoints } from './hiddenFromAndToBreakpoints';
import { Example as HiddenOnColorModes } from './hiddenOnColorModes';
import { Example as HiddenOnlyOnBreakPoints } from './hiddenOnlyOnBreakPoints';
import { Example as HiddenOnPlatforms } from './hiddenOnPlatforms';

storiesOf('Hidden', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('basic', () => <Basic />)
  .add('hiddenOnColorModes', () => <HiddenOnColorModes />)
  .add('HiddenFromAndToBreakpoints', () => <HiddenFromAndToBreakpoints />)
  .add('hiddenOnlyOnBreakPoints', () => <HiddenOnlyOnBreakPoints />)
  .add('hiddenOnPlatforms', () => <HiddenOnPlatforms />);

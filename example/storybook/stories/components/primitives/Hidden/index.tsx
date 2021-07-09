import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './basic';
import { Example as HiddenFromAndToBreakpoints } from './hiddenFromAndToBreakpoints';
import { Example as HiddenOnColorModes } from './hiddenOnColorModes';
import { Example as HiddenOnlyOnBreakPoints } from './hiddenOnlyOnBreakPoints';
import { Example as HiddenOnPlatforms } from './hiddenOnPlatforms';

storiesOf('Hidden', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('HiddenOnColorModes', () => <HiddenOnColorModes />)
  .add('HiddenFromAndToBreakpoints', () => <HiddenFromAndToBreakpoints />)
  .add('HiddenOnlyOnBreakPoints', () => <HiddenOnlyOnBreakPoints />)
  .add('HiddenOnPlatforms', () => <HiddenOnPlatforms />);

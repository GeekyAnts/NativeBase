import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';

import Fade from './Fade';
import ScaleFade from './ScaleFade';
import Slide from './Slide';
import SlideComposition from './SlideComposition';
import SlideWrapped from './SlideWrapped';
import SlideFade from './SlideFade';

storiesOf('Transitions', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Fade', () => <Fade />)
  .add('ScaleFade', () => <ScaleFade />)
  .add('Slide', () => <Slide />)
  .add('Slide wrapped inside parent', () => <SlideWrapped />)
  .add('SlideComposition', () => <SlideComposition />)
  .add('SlideFade', () => <SlideFade />);

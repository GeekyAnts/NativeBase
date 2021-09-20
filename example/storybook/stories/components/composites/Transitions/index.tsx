import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Fade } from './Fade';
import { Example as ScaleFade } from './ScaleFade';
import { Example as Slide } from './Slide';
import { Example as SlideWrapped } from './SlideWrapped';
import { Example as SlideFade } from './SlideFade';
import { Example as Stagger } from './Stagger';

storiesOf('Transitions', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Fade', () => <Fade />)
  .add('ScaleFade', () => <ScaleFade />)
  .add('Slide', () => <Slide />)
  .add('Slide wrapped inside parent', () => <SlideWrapped />)
  .add('SlideFade', () => <SlideFade />)
  .add('Stagger', () => <Stagger />);

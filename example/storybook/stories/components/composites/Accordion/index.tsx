import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './Basic';
import Playground from './Playground';
import Multiple from './Multiple';
import AccessingInternalState from './AccessingInternalState';
import ExpandedStyle from './ExpandedStyle';
import Toggle from './Toggle';
import DefaultIndex from './DefaultIndex';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Multiple', () => <Multiple />)
  .add('Default Index', () => <DefaultIndex />)
  .add('Toggle', () => <Toggle />)
  .add('Expanded Style', () => <ExpandedStyle />)

  .add('Accessing Internal State', () => <AccessingInternalState />);

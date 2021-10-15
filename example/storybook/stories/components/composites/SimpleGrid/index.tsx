import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import NumberOfColumnsSimpleGrid from './NumberOfColumns';
import MinChildWidthSimpleGrid from './MinWidthColumns';
import type { StoryFn } from '@storybook/addons';

storiesOf('SimpleGrid', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Using columns', () => <NumberOfColumnsSimpleGrid />)
  .add('Using minChildWidth', () => <MinChildWidthSimpleGrid />);

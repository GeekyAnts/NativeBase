import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as NumberOfColumnsSimpleGrid } from './NumberOfColumns';
// import { Example as MinChildWidthSimpleGrid } from './MinWidthColumns';
import { Example as ResponsiveColumns } from './ResponsiveColumns';
import { Example as Spacing } from './Spacing';

storiesOf('SimpleGrid', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Using columns', () => <NumberOfColumnsSimpleGrid />)
  .add('Responsive columns', () => <ResponsiveColumns />)
  .add('Spacing', () => <Spacing />);
// .add('Using minChildWidth', () => <MinChildWidthSimpleGrid />);

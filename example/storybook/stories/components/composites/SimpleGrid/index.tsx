import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import NumberOfColumnsSimpleGrid from './NumberOfColumns';
import MinChildWidthSimpleGrid from './MinWidthColumns';

storiesOf('SimpleGrid', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Using columns', () => <NumberOfColumnsSimpleGrid />)
  .add('Using minChildWidth', () => <MinChildWidthSimpleGrid />);

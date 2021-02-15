import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import DefaultList from './DefaultList';
import ListWithIcon from './ListWithIcon';
import VirtualizedList from './VirtualizedList';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default List', () => <DefaultList />)
  .add('List with Icon', () => <ListWithIcon />)
  .add('VirtualizedList ', () => <VirtualizedList />);

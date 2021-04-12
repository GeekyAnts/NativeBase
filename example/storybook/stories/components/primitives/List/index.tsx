import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import UnorderedList from './UnorderedList';
import StylingList from './StylingList';
import OrderedList from './OrderedList';
import Basic from './Basic';
import ListWithIcon from './ListWithIcon';
import PressableList from './PressableList';
import VirtualizedList from './VirtualizedList';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('OrderedList', () => <OrderedList />)
  .add('UnorderedList', () => <UnorderedList />)
  .add('StylingList', () => <StylingList />)
  .add('Pressable List Items', () => <PressableList />)
  .add('List with Icon', () => <ListWithIcon />)
  .add('VirtualizedList ', () => <VirtualizedList />);

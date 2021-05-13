import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as UnorderedList } from './UnorderedList';
import { Example as StylingList } from './StylingList';
import { Example as OrderedList } from './OrderedList';
import { Example as Basic } from './Basic';
import { Example as ListWithIcon } from './ListWithIcon';
import { Example as PressableList } from './PressableList';
import { Example as VirtualizedList } from './VirtualizedList';

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

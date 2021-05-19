import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as Controlled } from './Controlled';
import { Example as TabBarOnly } from './TabBarOnly';
import { Example as FittedTab } from './FittedTab';
import { Example as TabAlignment } from './TabAlignment';
import { Example as IconTabs } from './IconTabs';
import { Example as Size } from './Size';
import { Example as Colors } from './Colors';
import { Example as Composition } from './Composition';
import { Example as Variants } from './Variants';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Usage />)
  .add('Colors', () => <Colors />)
  .add('Size', () => <Size />)
  .add('Variants', () => <Variants />)
  .add('IconTabs', () => <IconTabs />)
  .add('Tab Alignment', () => <TabAlignment />)
  .add('Fitted Tab', () => <FittedTab />)
  .add('Controlled', () => <Controlled />)
  .add('TabBarOnly', () => <TabBarOnly />)
  .add('Composition', () => <Composition />);

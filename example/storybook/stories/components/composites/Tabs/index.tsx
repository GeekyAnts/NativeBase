import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Usage from './Usage';
import Controlled from './Controlled';
import TabBarOnly from './TabBarOnly';
import FittedTab from './FittedTab';
import TabAlignment from './TabAlignment';
import IconTabs from './IconTabs';
import Size from './Size';
import Colors from './Colors';
import Composition from './Composition';
import Variants from './Variants';

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

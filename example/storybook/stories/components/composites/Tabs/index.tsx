import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Usage from './Usage';
import TabBarOnly from './TabBarOnly';
import FittedTabs from './FittedTabs';
import Size from './Size';
import Colors from './Colors';
import TabsAlignment from './TabsAlignment';
import Composition from './Composition';
import Variants from './Variants';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('TabBarOnly', () => <TabBarOnly />)
  .add('Usage', () => <Usage />)
  .add('Composition', () => <Composition />)
  .add('Variants', () => <Variants />)
  .add('TabsAlignment', () => <TabsAlignment />)
  .add('Colors', () => <Colors />)
  .add('Size', () => <Size />)
  .add('FittedTabs', () => <FittedTabs />);

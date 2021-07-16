import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Separators } from './Separators';
import { Example as ComponentSeparator } from './ComponentSeparator';
import { Example as Composition } from './Composition';
import { Example as Collapsible } from './Collapsible';

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Separators', () => <Separators />)
  .add('ComponentSeparator', () => <ComponentSeparator />)
  .add('Composition', () => <Composition />)
  .add('Collapsible', () => <Collapsible />);

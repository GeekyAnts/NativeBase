import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Separators from './Separators';
import ComponentSeparator from './ComponentSeparator';
import Composition from './Composition';

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .add('Composition', () => <Composition />)
  .add('Basic', () => <Basic />)
  .add('Separators', () => <Separators />)
  .add('ComponentSeparator', () => <ComponentSeparator />)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>);

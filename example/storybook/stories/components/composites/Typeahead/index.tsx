import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { UsingComponent } from './UsingComponent';
import { UsingComponentWithRenderItem } from './UsingComponentWithRenderItem';
import { UsingControlledInput } from './UsingControlledInput';
import { UsingWithAPI } from './UsingWithAPI';
import { UsingHook } from './UsingHook';

storiesOf('Typeahead', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <UsingComponent />)
  .add('Using render item', () => <UsingComponentWithRenderItem />)
  .add('Using Controlled input', () => <UsingControlledInput />)
  .add('Using with async API', () => <UsingWithAPI />)
  .add('Custom Typeahead using useTypeahead hook', () => <UsingHook />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../components/Wrapper';

import { UsingHook } from './UsingHook';

storiesOf('useTypeahead', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Using Hook', () => <UsingHook />);

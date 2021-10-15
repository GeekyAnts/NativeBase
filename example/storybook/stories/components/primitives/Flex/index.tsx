import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Flex } from './basic';
import { Example as SpacerExample } from './spacer';
import Wrapper from './../../Wrapper';
import type { StoryFn } from '@storybook/addons';

storiesOf('Flex', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Usage', () => <Flex />)
  .add('Spacer Example', () => <SpacerExample />);

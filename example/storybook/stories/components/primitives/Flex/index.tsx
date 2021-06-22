import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Example as Flex } from './basic';
import { Example as SpacerExample } from './spacer';
import Wrapper from './../../Wrapper';

storiesOf('Flex', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Usage', () => <Flex />)
  .add('Spacer Example', () => <SpacerExample />);

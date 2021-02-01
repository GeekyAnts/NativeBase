import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Example from './example';
import Size from './Size';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import Custom from './Custom';

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Tag', () => <Example />)
  .add('Sizes', () => <Size />)
  .add('TagLeftIcon', () => <LeftIcon />)
  .add('TagRightIcon', () => <RightIcon />)
  .add('Custom Tag', () => <Custom />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Basic from './Basic';
import Native from './Native';
import Variant from './Styled';
import Wrapper from './../../Wrapper';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Native', () => <Native />)
  .add('Variant', () => <Variant />);

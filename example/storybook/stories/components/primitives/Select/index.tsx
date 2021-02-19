import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Variant from './Variant';
import Basic from './Basic';
import Wrapper from './../../Wrapper';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Variant', () => <Variant />);
